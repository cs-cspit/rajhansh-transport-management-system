// server/models/Salary.js
const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema(
  {
    driverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      required: [true, "Driver is required"],
    },
    month: {
      type: Number,
      required: true,
      min: 1,
      max: 12,
    },
    year: {
      type: Number,
      required: true,
    },
    baseSalary: {
      type: Number,
      required: [true, "Base salary is required"],
      min: [0, "Base salary cannot be negative"],
    },
    tripBonus: {
      type: Number,
      default: 0,
    },
    performanceBonus: {
      type: Number,
      default: 0,
    },
    overtimeAmount: {
      type: Number,
      default: 0,
    },
    deductions: {
      fuelPenalty: {
        type: Number,
        default: 0,
      },
      maintenancePenalty: {
        type: Number,
        default: 0,
      },
      latePenalty: {
        type: Number,
        default: 0,
      },
      other: {
        type: Number,
        default: 0,
      },
    },
    totalDeductions: {
      type: Number,
      default: 0,
    },
    totalEarnings: {
      type: Number,
      default: 0,
    },
    netSalary: {
      type: Number,
      default: 0,
    },
    tripsCompleted: {
      type: Number,
      default: 0,
    },
    totalDistance: {
      type: Number,
      default: 0,
    },
    totalWorkingDays: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "paid", "rejected"],
      default: "pending",
    },
    paidOn: {
      type: Date,
      default: null,
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
    paymentMethod: {
      type: String,
      enum: ["cash", "bank-transfer", "cheque", "upi"],
      default: "bank-transfer",
    },
    transactionReference: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Calculate total deductions
salarySchema.pre("save", function (next) {
  this.totalDeductions =
    this.deductions.fuelPenalty +
    this.deductions.maintenancePenalty +
    this.deductions.latePenalty +
    this.deductions.other;
  next();
});

// Calculate total earnings and net salary
salarySchema.pre("save", function (next) {
  this.totalEarnings =
    this.baseSalary +
    this.tripBonus +
    this.performanceBonus +
    this.overtimeAmount;

  this.netSalary = this.totalEarnings - this.totalDeductions;
  next();
});

// Unique constraint for driver + month + year
salarySchema.index({ driverId: 1, month: 1, year: 1 }, { unique: true });

module.exports = mongoose.model("Salary", salarySchema);
