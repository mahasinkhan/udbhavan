import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, default: "teacher" },

    phone: { type: String },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    dob: { type: Date },

    // Teaching related
    subjects: [String], // e.g. ["Physics", "Maths"]
    batches: [{ type: mongoose.Schema.Types.ObjectId, ref: "Batch" }],

    // Work created by teacher
    createdQuizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }],
    createdAssignments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assignment" }],
    uploadedMaterials: [{ type: mongoose.Schema.Types.ObjectId, ref: "Material" }],

    // Activity tracking
    attendanceRecords: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attendance" }],
    performanceReports: [{ type: mongoose.Schema.Types.ObjectId, ref: "Report" }],

    // Admin interaction
    complaints: [{ type: mongoose.Schema.Types.ObjectId, ref: "Complaint" }],
    notices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notice" }],

    // Extra info
    address: { type: String },
    qualification: { type: String }, // e.g. M.Sc, Ph.D
    experience: { type: Number }, // years of experience
    profilePic: { type: String }, // URL or path

    // Status
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("Teacher", teacherSchema);
