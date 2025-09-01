import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    teacher: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Teacher", 
      required: true 
    },
    batch: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Batch", 
      required: true 
    },
    title: { 
      type: String, 
      required: true, 
      trim: true 
    },
    description: { 
      type: String, 
      trim: true 
    },
    questions: [
      {
        question: { 
          type: String, 
          required: true 
        },
        options: {
          type: [String], 
          validate: {
            validator: function (arr) {
              return arr.length >= 2; // at least 2 options
            },
            message: "At least two options are required."
          },
          required: true
        },
        correctAnswer: {
          type: Number,
          required: true,
          validate: {
            validator: function (val) {
              return val >= 0 && val < this.options.length;
            },
            message: "Correct answer index must match one of the options."
          }
        }
      }
    ],
    duration: { 
      type: Number, // in minutes
      default: 30 
    },
    isActive: { 
      type: Boolean, 
      default: true 
    }
  },
  { timestamps: true }
);

export default mongoose.model("Quiz", quizSchema);
