import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    student: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Student", 
      required: true 
    },
    quiz: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Quiz", 
      required: true 
    },
    score: { 
      type: Number, 
      required: true, 
      min: 0 
    },
    total: { 
      type: Number, 
      required: true, 
      min: 1 
    },
    percentage: { 
      type: Number, 
      min: 0, 
      max: 100 
    },
    status: { 
      type: String, 
      enum: ["Pass", "Fail", "Pending"], 
      default: "Pending" 
    }
  },
  { timestamps: true }
);

// ✅ Pre-save hook to auto-calculate percentage
resultSchema.pre("save", function (next) {
  if (this.score !== undefined && this.total > 0) {
    this.percentage = ((this.score / this.total) * 100).toFixed(2);
    this.status = this.percentage >= 40 ? "Pass" : "Fail"; // Example: 40% passing criteria
  }
  next();
});

// ✅ Compound index for faster lookups (student + quiz)
resultSchema.index({ student: 1, quiz: 1 }, { unique: true });

export default mongoose.model("Result", resultSchema);
