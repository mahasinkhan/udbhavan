import mongoose from "mongoose";

const batchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Batch name is required"],
      trim: true,
    },
    class: {
      type: String,
      enum: ["11", "12", "Dropper"],
      required: [true, "Class type is required"],
    },
    mode: {
      type: String,
      enum: ["online", "offline"],
      default: "offline",
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
      },
    ],
    quizzes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
      },
    ],
  },
  { timestamps: true }
);

const Batch = mongoose.model("Batch", batchSchema);
export default Batch;
