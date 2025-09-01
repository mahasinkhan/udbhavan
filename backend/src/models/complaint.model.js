import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" }, // who raised complaint
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }, // complaint against (optional if general)
  description: { type: String, required: true, trim: true }, // complaint details
  status: { 
    type: String, 
    enum: ["pending", "in-progress", "resolved"], 
    default: "pending" 
  },
  resolvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" }, // who handled
  resolutionNote: { type: String, default: "" }, // optional admin response
  priority: { type: String, enum: ["low", "medium", "high"], default: "medium" } // helps admins prioritize
}, { timestamps: true });

export default mongoose.model("Complaint", complaintSchema);
