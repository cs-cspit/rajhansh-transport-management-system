// server/models/Expense.js
const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: [
        "fuel",
        "maintenance",
        "toll",
        "salary",
        "insurance",
        "permit",
        "other",
      ],
      required: [true, "Category is required"],
    },
    subcategory: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0, "Amount cannot be negative"],
    },
    truckId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Truck",
      default: null,
    },
    driverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      default: null,
    },
    relatedTo: {
      type: String,
      enum: ["fuel", "maintenance", "trip", "general"],
      default: "general",
    },
    relatedId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "card", "bank-transfer", "upi", "cheque"],
      default: "cash",
    },
    paidTo: {
      type: String,
      default: null,
    },
    invoiceNumber: {
      type: String,
      default: null,
    },
    invoiceDocument: {
      type: String,
      default: null,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "paid", "rejected"],
      default: "pending",
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
      default: null,
    },
    notes: {
      type: String,
      default: null,
    },
    isRecurring: {
      type: Boolean,
      default: false,
    },
    recurringFrequency: {
      type: String,
      enum: ["monthly", "quarterly", "yearly"],
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
expenseSchema.index({ category: 1, date: -1 });
expenseSchema.index({ status: 1 });
expenseSchema.index({ truckId: 1 });
expenseSchema.index({ driverId: 1 });

module.exports = mongoose.model("Expense", expenseSchema);
