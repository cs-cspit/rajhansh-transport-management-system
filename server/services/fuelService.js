// server/services/fuelService.js
const FuelLog = require("../models/FuelLog");
const Truck = require("../models/truck");
const Driver = require("../models/Driver");
const { AppError } = require("../middleware/errorHandler");

class FuelService {
  // Get all fuel logs
  async getAllFuelLogs(filters = {}) {
    const query = {};

    if (filters.truckId) {
      query.truckId = filters.truckId;
    }

    if (filters.driverId) {
      query.driverId = filters.driverId;
    }

    if (filters.verificationStatus) {
      query.verificationStatus = filters.verificationStatus;
    }

    if (filters.isAnomaly !== undefined) {
      query.isAnomaly = filters.isAnomaly === "true";
    }

    if (filters.startDate && filters.endDate) {
      query.filledAt = {
        $gte: new Date(filters.startDate),
        $lte: new Date(filters.endDate),
      };
    }

    const fuelLogs = await FuelLog.find(query)
      .populate("truckId", "truckNumber modelName")
      .populate("driverId", "name contactNumber")
      // ✅ REMOVED - .populate("tripId", "source destination")
      .populate("verifiedBy", "email companyName")
      .sort({ filledAt: -1 });

    return fuelLogs;
  }

  // Get single fuel log
  async getFuelLogById(fuelLogId) {
    const fuelLog = await FuelLog.findById(fuelLogId)
      .populate("truckId", "truckNumber modelName capacity")
      .populate("driverId", "name contactNumber licenseNumber")
      // ✅ REMOVED - .populate("tripId", "source destination distance")
      .populate("verifiedBy", "email companyName");

    if (!fuelLog) {
      throw new AppError("Fuel log not found", 404);
    }

    return fuelLog;
  }

  // Rest of the code stays the same...

  // Create fuel log
  async createFuelLog(fuelData, receiptFile) {
    const { truckId, driverId } = fuelData;

    // Validate truck
    const truck = await Truck.findById(truckId);
    if (!truck) {
      throw new AppError("Truck not found", 404);
    }

    // Validate driver if provided
    if (driverId) {
      const driver = await Driver.findById(driverId);
      if (!driver) {
        throw new AppError("Driver not found", 404);
      }
    }

    // Get previous odometer reading
    const previousLog = await FuelLog.findOne({ truckId })
      .sort({ odometerReading: -1 })
      .limit(1);

    if (previousLog) {
      fuelData.previousOdometerReading = previousLog.odometerReading;

      // Validate odometer reading
      if (fuelData.odometerReading < previousLog.odometerReading) {
        throw new AppError(
          "Odometer reading cannot be less than previous reading",
          400
        );
      }
    }

    // Add receipt file path
    if (receiptFile) {
      fuelData.receiptImage = receiptFile.path;
    }

    // Create fuel log
    const fuelLog = await FuelLog.create(fuelData);

    return fuelLog;
  }

  // Update fuel log
  async updateFuelLog(fuelLogId, fuelData, receiptFile) {
    const fuelLog = await FuelLog.findById(fuelLogId);

    if (!fuelLog) {
      throw new AppError("Fuel log not found", 404);
    }

    // Only allow updates if not verified
    if (fuelLog.verificationStatus === "verified") {
      throw new AppError("Cannot update verified fuel log", 400);
    }

    // Update receipt if new file
    if (receiptFile) {
      fuelData.receiptImage = receiptFile.path;
    }

    // Update fields
    Object.keys(fuelData).forEach((key) => {
      if (fuelData[key] !== undefined) {
        fuelLog[key] = fuelData[key];
      }
    });

    await fuelLog.save();

    return fuelLog;
  }

  // Delete fuel log
  async deleteFuelLog(fuelLogId) {
    const fuelLog = await FuelLog.findById(fuelLogId);

    if (!fuelLog) {
      throw new AppError("Fuel log not found", 404);
    }

    // Only allow deletion if not verified
    if (fuelLog.verificationStatus === "verified") {
      throw new AppError("Cannot delete verified fuel log", 400);
    }

    await fuelLog.deleteOne();

    return { message: "Fuel log deleted successfully" };
  }

  // Verify fuel log
  async verifyFuelLog(fuelLogId, ownerId, verificationData) {
    const fuelLog = await FuelLog.findById(fuelLogId);

    if (!fuelLog) {
      throw new AppError("Fuel log not found", 404);
    }

    fuelLog.verificationStatus = verificationData.status || "verified";
    fuelLog.verifiedBy = ownerId;

    if (verificationData.status === "rejected") {
      fuelLog.notes = verificationData.notes || "Rejected by owner";
    }

    await fuelLog.save();

    return fuelLog;
  }

  // Get fuel statistics
  async getFuelStats(filters = {}) {
    const query = {};

    if (filters.truckId) {
      query.truckId = filters.truckId;
    }

    if (filters.driverId) {
      query.driverId = filters.driverId;
    }

    if (filters.startDate && filters.endDate) {
      query.filledAt = {
        $gte: new Date(filters.startDate),
        $lte: new Date(filters.endDate),
      };
    }

    const stats = await FuelLog.aggregate([
      { $match: query },
      {
        $group: {
          _id: null,
          totalLogs: { $sum: 1 },
          totalFuelQuantity: { $sum: "$quantityLiters" },
          totalCost: { $sum: "$totalCost" },
          avgFuelEfficiency: { $avg: "$fuelEfficiency" },
          avgPricePerLiter: { $avg: "$pricePerLiter" },
          pendingVerification: {
            $sum: {
              $cond: [{ $eq: ["$verificationStatus", "pending"] }, 1, 0],
            },
          },
        },
      },
    ]);

    return (
      stats[0] || {
        totalLogs: 0,
        totalFuelQuantity: 0,
        totalCost: 0,
        avgFuelEfficiency: 0,
        avgPricePerLiter: 0,
        pendingVerification: 0,
      }
    );
  }

  // Get fuel trends
  async getFuelTrends(days = 30) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const trends = await FuelLog.aggregate([
      {
        $match: {
          filledAt: { $gte: startDate },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$filledAt" },
          },
          totalQuantity: { $sum: "$quantityLiters" },
          totalCost: { $sum: "$totalCost" },
          avgPrice: { $avg: "$pricePerLiter" },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    return trends;
  }

  // Compare fuel efficiency across trucks
  async compareTruckEfficiency() {
    const comparison = await FuelLog.aggregate([
      {
        $match: {
          fuelEfficiency: { $ne: null },
        },
      },
      {
        $group: {
          _id: "$truckId",
          avgEfficiency: { $avg: "$fuelEfficiency" },
          totalFuelUsed: { $sum: "$quantityLiters" },
          totalCost: { $sum: "$totalCost" },
          logsCount: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "trucks",
          localField: "_id",
          foreignField: "_id",
          as: "truck",
        },
      },
      { $unwind: "$truck" },
      {
        $project: {
          truckNumber: "$truck.truckNumber",
          modelName: "$truck.modelName",
          avgEfficiency: 1,
          totalFuelUsed: 1,
          totalCost: 1,
          logsCount: 1,
        },
      },
      { $sort: { avgEfficiency: -1 } },
    ]);

    return comparison;
  }

  // Get pending verifications
  async getPendingVerifications() {
    const pending = await FuelLog.find({
      verificationStatus: "pending",
    })
      .populate("truckId", "truckNumber modelName")
      .populate("driverId", "name contactNumber")
      .sort({ filledAt: -1 });

    return pending;
  }
}

module.exports = new FuelService();
