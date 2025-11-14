// server/models/FuelLog.js
const mongoose = require("mongoose");

const fuelLogSchema = new mongoose.Schema(
  {
    truckId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Truck",
      required: [true, "Truck is required"],
    },
    driverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      default: null,
    },
    fuelStation: {
      name: {
        type: String,
        required: [true, "Fuel station name is required"],
      },
      location: {
        type: String,
        required: [true, "Fuel station location is required"],
      },
    },
    fuelType: {
      type: String,
      enum: ["petrol", "diesel", "cng", "electric"],
      default: "diesel",
    },
    quantityLiters: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [0, "Quantity must be positive"],
    },
    pricePerLiter: {
      type: Number,
      required: [true, "Price per liter is required"],
      min: [0, "Price must be positive"],
    },
    totalCost: {
      type: Number,
      default: 0, // ✅ Will be calculated automatically
    },
    odometerReading: {
      type: Number,
      required: [true, "Odometer reading is required"],
      min: [0, "Odometer reading must be positive"],
    },
    filledAt: {
      type: Date,
      default: Date.now,
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "card", "upi", "fuel-card", "credit"],
      default: "cash",
    },
    receiptNumber: {
      type: String,
      default: null,
    },
    receiptImage: {
      type: String,
      default: null,
    },
    verificationStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
      default: null,
    },
    notes: {
      type: String,
      default: null,
    },
    previousOdometerReading: {
      type: Number,
      default: null,
    },
    fuelEfficiency: {
      type: Number, // km per liter
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// ✅ Calculate totalCost before saving
fuelLogSchema.pre("save", function (next) {
  if (this.quantityLiters && this.pricePerLiter) {
    this.totalCost = this.quantityLiters * this.pricePerLiter;
  }
  next();
});

// ✅ Calculate fuel efficiency if previous reading exists
fuelLogSchema.pre("save", async function (next) {
  if (this.isNew && this.odometerReading) {
    try {
      // Get the last fuel log for this truck
      const lastFuelLog = await mongoose
        .model("FuelLog")
        .findOne({
          truckId: this.truckId,
          _id: { $ne: this._id },
        })
        .sort({ filledAt: -1 });

      if (lastFuelLog && lastFuelLog.odometerReading) {
        this.previousOdometerReading = lastFuelLog.odometerReading;
        const distanceTraveled =
          this.odometerReading - lastFuelLog.odometerReading;

        if (distanceTraveled > 0 && this.quantityLiters > 0) {
          this.fuelEfficiency = Number(
            (distanceTraveled / this.quantityLiters).toFixed(2)
          );
        }
      }
    } catch (err) {
      console.error("Error calculating fuel efficiency:", err);
    }
  }
  next();
});

// Indexes
fuelLogSchema.index({ truckId: 1, filledAt: -1 });
fuelLogSchema.index({ driverId: 1 });
fuelLogSchema.index({ verificationStatus: 1 });

module.exports = mongoose.model("FuelLog", fuelLogSchema);
