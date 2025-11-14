const mongoose = require("mongoose");

const tripLogSchema = new mongoose.Schema(
  {
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      required: true,
    },
    truck: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Truck",
      required: true,
    },
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    distanceKm: { type: Number, required: true, min: 0 },
    cargoType: { type: String },
    notes: { type: String },
    status: {
      type: String,
      enum: ["started", "completed", "cancelled"],
      default: "completed",
    },
  },
  { timestamps: true }
);

tripLogSchema.index({ driver: 1, createdAt: -1 });

module.exports = mongoose.model("TripLog", tripLogSchema);