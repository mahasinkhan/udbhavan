import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    issuedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },

    // Target audience for the notice
    target: {
      type: String,
      enum: ["all", "students", "teachers"],
      default: "all",
    },

    // Optional expiry date for the notice
    expiresAt: {
      type: Date,
    },

    // To check whether notice is still active
    status: {
      type: String,
      enum: ["active", "expired", "archived"],
      default: "active",
    },
  },
  { timestamps: true }
);

// Auto-update status if notice expires
noticeSchema.pre("save", function (next) {
  if (this.expiresAt && this.expiresAt < new Date()) {
    this.status = "expired";
  }
  next();
});

export default mongoose.model("Notice", noticeSchema);
