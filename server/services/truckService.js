// server/services/truckService.js
const Truck = require("../models/truck");
const Driver = require("../models/Driver");
const { AppError } = require("../middleware/errorHandler");
const fs = require("fs").promises;
const path = require("path");

class TruckService {
  // Get all trucks
  async getAllTrucks(filters = {}) {
    const query = {};

    if (filters.status) {
      query.status = filters.status;
    }

    if (filters.search) {
      query.$or = [
        { truckNumber: { $regex: filters.search, $options: "i" } },
        { modelName: { $regex: filters.search, $options: "i" } },
      ];
    }

    const trucks = await Truck.find(query)
      .populate("assignedDriver", "name contactNumber licenseNumber")
      .sort({ createdAt: -1 });

    return trucks;
  }

  // Get single truck
  async getTruckById(truckId) {
    const truck = await Truck.findById(truckId).populate(
      "assignedDriver",
      "name contactNumber licenseNumber experienceYears"
    );

    if (!truck) {
      throw new AppError("Truck not found", 404);
    }

    return truck;
  }

  // Create truck
  async createTruck(truckData, files) {
    // Check if truck number already exists
    const existingTruck = await Truck.findOne({
      truckNumber: truckData.truckNumber,
    });
    if (existingTruck) {
      throw new AppError("Truck number already exists", 400);
    }

    // Handle file uploads
    const fileFields = [
      "pucFile",
      "permitAllIndiaFile",
      "permitGujaratFile",
      "insuranceFile",
      "fitnessFile",
      "rcFile",
      "truckImage",
    ];

    const truckFiles = {};
    fileFields.forEach((field) => {
      if (files[field] && files[field][0]) {
        truckFiles[field] = files[field][0].path;
      }
    });

    // Create truck
    const truck = await Truck.create({
      ...truckData,
      ...truckFiles,
    });

    return truck;
  }

  // Update truck
  async updateTruck(truckId, truckData, files) {
    const truck = await Truck.findById(truckId);

    if (!truck) {
      throw new AppError("Truck not found", 404);
    }

    // If truck number is being changed, check uniqueness
    if (truckData.truckNumber && truckData.truckNumber !== truck.truckNumber) {
      const existingTruck = await Truck.findOne({
        truckNumber: truckData.truckNumber,
      });
      if (existingTruck) {
        throw new AppError("Truck number already exists", 400);
      }
    }

    // Handle file uploads and delete old files
    const fileFields = [
      "pucFile",
      "permitAllIndiaFile",
      "permitGujaratFile",
      "insuranceFile",
      "fitnessFile",
      "rcFile",
      "truckImage",
    ];

    for (const field of fileFields) {
      if (files[field] && files[field][0]) {
        // Delete old file if exists
        if (truck[field]) {
          try {
            await fs.unlink(truck[field]);
          } catch (error) {
            console.log(`Error deleting old file: ${field}`);
          }
        }
        truck[field] = files[field][0].path;
      }
    }

    // Update other fields
    Object.keys(truckData).forEach((key) => {
      if (truckData[key] !== undefined) {
        truck[key] = truckData[key];
      }
    });

    await truck.save();

    return truck;
  }

  // Delete truck
  async deleteTruck(truckId) {
    const truck = await Truck.findById(truckId);

    if (!truck) {
      throw new AppError("Truck not found", 404);
    }

    // Check if truck is assigned to a driver
    if (truck.assignedDriver) {
      // Unassign driver
      await Driver.findByIdAndUpdate(truck.assignedDriver, {
        assignedTruck: null,
      });
    }

    // Delete associated files
    const fileFields = [
      "pucFile",
      "permitAllIndiaFile",
      "permitGujaratFile",
      "insuranceFile",
      "fitnessFile",
      "rcFile",
      "truckImage",
    ];

    for (const field of fileFields) {
      if (truck[field]) {
        try {
          await fs.unlink(truck[field]);
        } catch (error) {
          console.log(`Error deleting file: ${field}`);
        }
      }
    }

    await Truck.deleteOne();

    return { message: "Truck deleted successfully" };
  }

  // Assign driver to truck
  async assignDriver(truckId, driverId) {
    const truck = await Truck.findById(truckId);
    const driver = await Driver.findById(driverId);

    if (!truck) {
      throw new AppError("Truck not found", 404);
    }

    if (!driver) {
      throw new AppError("Driver not found", 404);
    }

    // Check if driver is already assigned to another truck
    if (driver.assignedTruck && driver.assignedTruck.toString() !== truckId) {
      throw new AppError("Driver is already assigned to another truck", 400);
    }

    // Unassign previous driver from truck
    if (truck.assignedDriver && truck.assignedDriver.toString() !== driverId) {
      await Driver.findByIdAndUpdate(truck.assignedDriver, {
        assignedTruck: null,
      });
    }

    // Assign new driver
    truck.assignedDriver = driverId;
    await truck.save();

    driver.assignedTruck = truckId;
    await driver.save();

    return { truck, driver };
  }

  // Unassign driver from truck
  async unassignDriver(truckId) {
    const truck = await Truck.findById(truckId);

    if (!truck) {
      throw new AppError("Truck not found", 404);
    }

    if (!truck.assignedDriver) {
      throw new AppError("No driver assigned to this truck", 400);
    }

    // Unassign driver
    await Driver.findByIdAndUpdate(truck.assignedDriver, {
      assignedTruck: null,
    });

    truck.assignedDriver = null;
    await truck.save();

    return { message: "Driver unassigned successfully" };
  }

  // Get trucks with expiring documents
  async getExpiringDocuments(days = 30) {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);

    const trucks = await Truck.find({
      $or: [
        { pucExpiryDate: { $lte: futureDate, $gte: new Date() } },
        { permitAllIndiaExpiryDate: { $lte: futureDate, $gte: new Date() } },
        { permitGujaratExpiryDate: { $lte: futureDate, $gte: new Date() } },
        { insuranceExpiryDate: { $lte: futureDate, $gte: new Date() } },
        { fitnessExpiryDate: { $lte: futureDate, $gte: new Date() } },
        { rcExpiryDate: { $lte: futureDate, $gte: new Date() } },
      ],
    }).populate("assignedDriver", "name contactNumber");

    return trucks;
  }

  // Update truck status
  async updateTruckStatus(truckId, status) {
    const validStatuses = ["active", "inactive", "maintenance"];

    if (!validStatuses.includes(status)) {
      throw new AppError("Invalid status", 400);
    }

    const truck = await Truck.findByIdAndUpdate(
      truckId,
      { status },
      { new: true, runValidators: true }
    );

    if (!truck) {
      throw new AppError("Truck not found", 404);
    }

    return truck;
  }
}

module.exports = new TruckService();
