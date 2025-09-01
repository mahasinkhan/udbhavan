import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "admin" },

  // Extra powers
  permissions: {
    type: [String],
    default: [
      "manage_students",
      "manage_teachers",
      "manage_batches",
      "manage_quizzes",
      "manage_results",
      "manage_payments",
      "manage_notices",
      "manage_complaints"
    ]
  }
}, { timestamps: true });

export default mongoose.model("Admin", adminSchema);
