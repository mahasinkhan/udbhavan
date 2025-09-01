import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    // Basic Info
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "student" },

    // Academic Info
    class: { type: String, enum: ["11", "12", "Dropper"], required: true },
    batch: { type: mongoose.Schema.Types.ObjectId, ref: "Batch" },

    // Tracking & Relations
    payments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Payment" }], // all student payments
    results: [{ type: mongoose.Schema.Types.ObjectId, ref: "Result" }],   // quiz/test results
    attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attendance" }], // daily attendance
    assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assignment" }], // homework/assignments
    quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }], // attempted quizzes

    // Extra fields
    contact: { type: String }, // phone number
    guardianName: { type: String }, // parent/guardian name
    guardianContact: { type: String }, // parent/guardian phone
    address: { type: String },
    dob: { type: Date },
    isActive: { type: Boolean, default: true } // active/inactive student
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
