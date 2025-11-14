// server/services/driverService.js
const Driver = require("../models/Driver");
const Truck = require("../models/truck");
const bcrypt = require("bcryptjs");
const { AppError } = require("../middleware/errorHandler");

class DriverService {
  // Get all drivers
  async getAllDrivers(filters = {}) {
    const query = {};

    if (filters.search) {
      query.$or = [
        { name: { $regex: filters.search, $options: "i" } },
        { username: { $regex: filters.search, $options: "i" } },
        { licenseNumber: { $regex: filters.search, $options: "i" } },
      ];
    }

    if (filters.status) {
      query.status = filters.status;
    }

    const drivers = await Driver.find(query)
      .populate("assignedTruck", "truckNumber modelName status")
      .sort({ createdAt: -1 });

    return drivers;
  }

  // Get single driver
  async getDriverById(driverId) {
    const driver = await Driver.findById(driverId).populate(
      "assignedTruck",
      "truckNumber modelName capacity status"
    );

    if (!driver) {
      throw new AppError("Driver not found", 404);
    }

    return driver;
  }

  // Create driver
  async createDriver(driverData) {
    const { name, password, phone, licenseNumber } = driverData;

    // Check if username exists
    const existingDriver = await Driver.findOne({ name });
    if (existingDriver) {
      throw new AppError("Username already exists", 400);
    }

    // Check if contact number exists
    const existingContact = await Driver.findOne({ phone });
    if (existingContact) {
      throw new AppError("Contact number already registered", 400);
    }

    // Check if license number exists
    const existingLicense = await Driver.findOne({ licenseNumber });
    if (existingLicense) {
      throw new AppError("License number already registered", 400);
    }

    // Create driver
    const driver = await Driver.create({
      ...driverData,
      password
    });

    // Remove password from response
    driver.password = undefined;

    return driver;
  }

  // Update driver
  async updateDriver(driverId, driverData) {
    const driver = await Driver.findById(driverId);

    if (!driver) {
      throw new AppError("Driver not found", 404);
    }

    // Check uniqueness if fields are being changed
    if (driverData.name && driverData.name !== driver.name) {
      const existingDriver = await Driver.findOne({
        name: driverData.name,
      });
      if (existingDriver) {
        throw new AppError("Username already exists", 400);
      }
    }

    if (driverData.phone && driverData.phone !== driver.phone) {
      const existingContact = await Driver.findOne({
        phone: driverData.phone,
      });
      if (existingContact) {
        throw new AppError("Contact number already registered", 400);
      }
    }

    if (
      driverData.licenseNumber &&
      driverData.licenseNumber !== driver.licenseNumber
    ) {
      const existingLicense = await Driver.findOne({
        licenseNumber: driverData.licenseNumber,
      });
      if (existingLicense) {
        throw new AppError("License number already registered", 400);
      }
    }

    // Update password if provided
    if (driverData.password) {
      driverData.password = await bcrypt.hash(driverData.password, 12);
    }

    // Update fields
    Object.keys(driverData).forEach((key) => {
      if (driverData[key] !== undefined) {
        driver[key] = driverData[key];
      }
    });

    await driver.save();

    // Remove password from response
    driver.password = undefined;

    return driver;
  }

  // Delete driver
  async deleteDriver(driverId) {
    const driver = await Driver.findById(driverId);

    if (!driver) {
      throw new AppError("Driver not found", 404);
    }

    // Unassign truck if assigned
    if (driver.assignedTruck) {
      await Truck.findByIdAndUpdate(driver.assignedTruck, {
        assignedDriver: null,
      });
    }

    await driver.deleteOne();

    return { message: "Driver deleted successfully" };
  }

  // Update driver status
  async updateDriverStatus(driverId, status) {
    const validStatuses = ["active", "inactive", "on-leave"];

    if (!validStatuses.includes(status)) {
      throw new AppError("Invalid status", 400);
    }

    const driver = await Driver.findByIdAndUpdate(
      driverId,
      { status },
      { new: true, runValidators: true }
    );

    if (!driver) {
      throw new AppError("Driver not found", 404);
    }

    return driver;
  }

  // Update driver rating
  async updateDriverRating(driverId, rating) {
    if (rating < 0 || rating > 5) {
      throw new AppError("Rating must be between 0 and 5", 400);
    }

    const driver = await Driver.findByIdAndUpdate(
      driverId,
      { rating },
      { new: true, runValidators: true }
    );

    if (!driver) {
      throw new AppError("Driver not found", 404);
    }

    return driver;
  }

  // Get drivers with expiring licenses
  async getExpiringLicenses(days = 30) {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);

    const drivers = await Driver.find({
      licenseExpiryDate: { $lte: futureDate, $gte: new Date() },
    }).populate("assignedTruck", "truckNumber modelName");

    return drivers;
  }

  // Get available drivers (not assigned to any truck)
  async getAvailableDrivers() {
    const drivers = await Driver.find({
      assignedTruck: null,
      status: "active",
    }).sort({ experienceYears: -1 });

    return drivers;
  }

  // Get driver statistics
  async getDriverStats(driverId) {
    const Trip = require("../models/Trip");

    const driver = await Driver.findById(driverId);
    if (!driver) {
      throw new AppError("Driver not found", 404);
    }

    const trips = await Trip.find({ driverId });

    const stats = {
      totalTrips: trips.length,
      completedTrips: trips.filter((t) => t.status === "completed").length,
      ongoingTrips: trips.filter((t) => t.status === "ongoing").length,
      totalDistance: trips.reduce((sum, t) => sum + (t.distance || 0), 0),
      totalFuelCost: trips.reduce((sum, t) => sum + (t.fuelCost || 0), 0),
      averageRating: driver.rating || 0,
    };

    return stats;
  }
}

module.exports = new DriverService();
