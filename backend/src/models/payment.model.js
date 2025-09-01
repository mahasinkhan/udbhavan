import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    student: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Student", 
      required: true 
    },

    amount: { 
      type: Number, 
      required: true, 
      min: 0 
    },

    status: { 
      type: String, 
      enum: ["pending", "completed", "failed"], 
      default: "pending" 
    },

    method: { 
      type: String, 
      enum: ["cash", "online", "cheque", "upi"], 
      default: "online" 
    },

    transactionId: { 
      type: String, 
      unique: true, 
      sparse: true, // allows multiple null values
      trim: true 
    },

    paymentDate: { 
      type: Date, 
      default: Date.now 
    },

    remarks: { 
      type: String, 
      trim: true 
    },

    verifiedBy: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Admin" 
    },

    isRefunded: { 
      type: Boolean, 
      default: false 
    },

    refundDetails: {
      refundDate: { type: Date },
      refundAmount: { type: Number, min: 0 },
      refundMethod: { type: String, enum: ["cash", "online", "upi", "cheque"] },
      refundTransactionId: { type: String, trim: true }
    }
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);

