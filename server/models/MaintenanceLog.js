// server/models/MaintenanceLog.js
const mongoose = require("mongoose");

const maintenanceLogSchema = new mongoose.Schema(
  {
    truckId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Truck",
      required: [true, "Truck is required"],
    },
    maintenanceType: {
      type: String,
      enum: ["regular", "emergency", "preventive", "breakdown"],
      required: [true, "Maintenance type is required"],
    },
    category: {
      type: String,
      enum: [
        "engine",
        "transmission",
        "brakes",
        "tires",
        "electrical",
        "body",
        "other",
      ],
      required: [true, "Category is required"],
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      default: "medium",
    },
    issueDescription: {
      type: String,
      required: [true, "Issue description is required"],
    },
    diagnosis: {
      type: String,
      default: null,
    },
    partsReplaced: [
      {
        partName: String,
        partNumber: String,
        quantity: Number,
        cost: Number,
      },
    ],
    laborCost: {
      type: Number,
      default: 0,
      min: [0, "Labor cost cannot be negative"],
    },
    partsCost: {
      type: Number,
      default: 0,
    },
    totalCost: {
      type: Number,
      default: 0,
    },
    serviceProvider: {
      name: String,
      location: String,
      contactNumber: String,
    },
    odometerReading: {
      type: Number,
      required: [true, "Odometer reading is required"],
      min: [0, "Odometer reading cannot be negative"],
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    completionDate: {
      type: Date,
      default: null,
    },
    estimatedCompletionDate: {
      type: Date,
      default: null,
    },
    nextMaintenanceDue: {
      type: Date,
      default: null,
    },
    nextMaintenanceOdometer: {
      type: Number,
      default: null,
    },
    status: {
      type: String,
      enum: ["scheduled", "in-progress", "completed", "cancelled"],
      default: "scheduled",
    },
    images: [
      {
        type: String, // File paths
      },
    ],
    invoiceDocument: {
      type: String,
      default: null,
    },
    warranty: {
      hasWarranty: {
        type: Boolean,
        default: false,
      },
      warrantyPeriod: Number, // in months
      warrantyExpiryDate: Date,
    },
    performedBy: {
      type: String, // Mechanic name
      default: null,
    },
    notes: {
      type: String,
      default: null,
    },
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      default: null,
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
      default: null,
    },
    isPredictive: {
      type: Boolean,
      default: false,
    },
    predictiveScore: {
      type: Number, // 0-100 score indicating urgency
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Calculate total cost before save
maintenanceLogSchema.pre("save", function (next) {
  // Calculate parts cost
  if (this.partsReplaced && this.partsReplaced.length > 0) {
    this.partsCost = this.partsReplaced.reduce((sum, part) => {
      return sum + part.cost * part.quantity;
    }, 0);
  }

  // Calculate total cost
  this.totalCost = this.laborCost + this.partsCost;

  next();
});

// Set next maintenance due date
maintenanceLogSchema.pre("save", function (next) {
  if (this.status === "completed" && !this.nextMaintenanceDue) {
    // Set next maintenance based on type
    const maintenanceIntervals = {
      regular: 90, // 3 months
      preventive: 180, // 6 months
      emergency: 30, // 1 month follow-up
      breakdown: 30,
    };

    const daysToAdd = maintenanceIntervals[this.maintenanceType] || 90;
    this.nextMaintenanceDue = new Date(
      Date.now() + daysToAdd * 24 * 60 * 60 * 1000
    );

    // Set next odometer milestone (typically 10000 km for regular)
    if (this.odometerReading) {
      this.nextMaintenanceOdometer = this.odometerReading + 10000;
    }
  }
  next();
});

// Indexes
maintenanceLogSchema.index({ truckId: 1, createdAt: -1 });
maintenanceLogSchema.index({ status: 1 });
maintenanceLogSchema.index({ maintenanceType: 1 });
maintenanceLogSchema.index({ nextMaintenanceDue: 1 });

module.exports = mongoose.model("MaintenanceLog", maintenanceLogSchema);
