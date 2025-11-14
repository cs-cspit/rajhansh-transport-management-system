// server/models/Trip.js
const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    truckId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Truck",
      required: [true, "Truck is required"],
    },
    driverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      required: [true, "Driver is required"],
    },
    source: {
      type: String,
      required: [true, "Source location is required"],
    },
    destination: {
      type: String,
      required: [true, "Destination location is required"],
    },
    distance: {
      type: Number,
      min: [0, "Distance must be positive"],
    },
    actualDistance: {
      type: Number,
      default: null,
    },
    startTime: {
      type: Date,
      default: Date.now,
    },
    endTime: {
      type: Date,
      default: null,
    },
    completionDate: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: ["ongoing", "completed", "cancelled"],
      default: "ongoing",
    },
    fuelUsed: {
      type: Number,
      default: null,
    },
    fuelCost: {
      type: Number,
      default: null,
    },
    cargoType: {
      type: String,
      default: null,
    },
    cargoWeight: {
      type: Number,
      default: null,
    },
    notes: {
      type: String,
      default: null,
    },
    cancelReason: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
tripSchema.index({ driverId: 1, status: 1 });
tripSchema.index({ truckId: 1, status: 1 });
tripSchema.index({ startTime: -1 });

module.exports = mongoose.model("Trip", tripSchema);
