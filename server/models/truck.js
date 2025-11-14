// server/models/Truck.js (or truck.js)
const mongoose = require("mongoose");

const truckSchema = new mongoose.Schema(
  {
    truckNumber: {
      type: String,
      required: [true, "Truck number is required"],
      unique: true,
      uppercase: true,
    },
    modelName: {
      type: String,
      required: [true, "Model name is required"],
    },
    capacity: {
      type: Number,
      required: [true, "Capacity is required"],
      min: [0, "Capacity must be positive"],
    },
    status: {
      type: String,
      enum: ["active", "inactive", "maintenance", "in-transit"],
      default: "active",
    },

    // ✅ ADD THIS FIELD
    assignedDriver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      default: null,
    },

    pucNumber: String,
    permitAllIndiaNumber: String,
    permitGujaratNumber: String,
    insuranceNumber: String,
    fitnessNumber: String,
    rcNumber: String,

    // Document expiry dates
    pucExpiryDate: Date,
    permitAllIndiaExpiryDate: Date,
    permitGujaratExpiryDate: Date,
    insuranceExpiryDate: Date,
    fitnessExpiryDate: Date,
    rcExpiryDate: Date,

    // Document files
    pucFile: String,
    permitAllIndiaFile: String,
    permitGujaratFile: String,
    insuranceFile: String,
    fitnessFile: String,
    rcFile: String,
    truckImage: String,

    documents: [
      {
        name: String,
        fileUrl: String,
        uploadedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Indexes
truckSchema.index({ truckNumber: 1 });
truckSchema.index({ status: 1 });
truckSchema.index({ assignedDriver: 1 });

module.exports = mongoose.model("Truck", truckSchema);
