// server/services/dashboardService.js
const Truck = require("../models/truck");
const Driver = require("../models/Driver");
const Trip = require("../models/Trip");
const { AppError } = require("../middleware/errorHandler");

class DashboardService {
  // Get owner dashboard stats
  async getOwnerDashboard() {
    // Get counts
    const totalTrucks = await Truck.countDocuments();
    const activeTrucks = await Truck.countDocuments({ status: "active" });
    const maintenanceTrucks = await Truck.countDocuments({
      status: "maintenance",
    });

    const totalDrivers = await Driver.countDocuments();
    const activeDrivers = await Driver.countDocuments({ status: "active" });

    const totalTrips = await Trip.countDocuments();
    const ongoingTrips = await Trip.countDocuments({ status: "ongoing" });
    const completedTrips = await Trip.countDocuments({ status: "completed" });

    // Get recent trips
    const recentTrips = await Trip.find()
      .populate("driverId", "name contactNumber")
      .populate("truckId", "truckNumber modelName")
      .sort({ createdAt: -1 })
      .limit(5);

    // Get expiring documents
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 30);

    const expiringTruckDocs = await Truck.find({
      $or: [
        { pucExpiryDate: { $lte: futureDate, $gte: new Date() } },
        { insuranceExpiryDate: { $lte: futureDate, $gte: new Date() } },
        { fitnessExpiryDate: { $lte: futureDate, $gte: new Date() } },
      ],
    }).select(
      "truckNumber pucExpiryDate insuranceExpiryDate fitnessExpiryDate"
    );

    const expiringDriverLicenses = await Driver.find({
      licenseExpiryDate: { $lte: futureDate, $gte: new Date() },
    }).select("name licenseNumber licenseExpiryDate");

    // Calculate total fuel cost and distance (from completed trips)
    const tripStats = await Trip.aggregate([
      { $match: { status: "completed" } },
      {
        $group: {
          _id: null,
          totalFuelCost: { $sum: "$fuelCost" },
          totalDistance: { $sum: "$actualDistance" },
          totalFuelUsed: { $sum: "$fuelUsed" },
        },
      },
    ]);

    const stats = tripStats[0] || {
      totalFuelCost: 0,
      totalDistance: 0,
      totalFuelUsed: 0,
    };

    return {
      summary: {
        totalTrucks,
        activeTrucks,
        maintenanceTrucks,
        totalDrivers,
        activeDrivers,
        totalTrips,
        ongoingTrips,
        completedTrips,
        totalFuelCost: stats.totalFuelCost,
        totalDistance: stats.totalDistance,
        totalFuelUsed: stats.totalFuelUsed,
      },
      recentTrips,
      alerts: {
        expiringTruckDocs,
        expiringDriverLicenses,
      },
    };
  }

  // Get driver dashboard stats
  async getDriverDashboard(driverId) {
    const driver = await Driver.findById(driverId).populate(
      "assignedTruck",
      "truckNumber modelName capacity status"
    );

    if (!driver) {
      throw new AppError("Driver not found", 404);
    }

    // Get trip stats
    const totalTrips = await Trip.countDocuments({ driverId });
    const completedTrips = await Trip.countDocuments({
      driverId,
      status: "completed",
    });
    const ongoingTrips = await Trip.countDocuments({
      driverId,
      status: "ongoing",
    });

    // Get current trip
    const currentTrip = await Trip.findOne({
      driverId,
      status: "ongoing",
    }).populate("truckId", "truckNumber modelName capacity");

    // Get recent trips
    const recentTrips = await Trip.find({ driverId })
      .populate("truckId", "truckNumber modelName")
      .sort({ createdAt: -1 })
      .limit(5);

    // Calculate total distance and fuel
    const tripStats = await Trip.aggregate([
      { $match: { driverId: driver._id, status: "completed" } },
      {
        $group: {
          _id: null,
          totalDistance: { $sum: "$actualDistance" },
          totalFuelUsed: { $sum: "$fuelUsed" },
        },
      },
    ]);

    const stats = tripStats[0] || {
      totalDistance: 0,
      totalFuelUsed: 0,
    };

    return {
      driver: {
        name: driver.name,
        contactNumber: driver.contactNumber,
        licenseNumber: driver.licenseNumber,
        experienceYears: driver.experienceYears,
        rating: driver.rating,
        assignedTruck: driver.assignedTruck,
      },
      summary: {
        totalTrips,
        completedTrips,
        ongoingTrips,
        totalDistance: stats.totalDistance,
        totalFuelUsed: stats.totalFuelUsed,
      },
      currentTrip,
      recentTrips,
    };
  }

  // Get analytics data for charts
  async getAnalytics(period = "30days") {
    let startDate = new Date();

    switch (period) {
      case "7days":
        startDate.setDate(startDate.getDate() - 7);
        break;
      case "30days":
        startDate.setDate(startDate.getDate() - 30);
        break;
      case "90days":
        startDate.setDate(startDate.getDate() - 90);
        break;
      case "1year":
        startDate.setFullYear(startDate.getFullYear() - 1);
        break;
      default:
        startDate.setDate(startDate.getDate() - 30);
    }

    // Trip trends
    const tripTrends = await Trip.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate },
          status: "completed",
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          count: { $sum: 1 },
          totalDistance: { $sum: "$actualDistance" },
          totalFuelCost: { $sum: "$fuelCost" },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Fuel efficiency by truck
    const fuelEfficiencyByTruck = await Trip.aggregate([
      {
        $match: {
          status: "completed",
          fuelEfficiency: { $exists: true, $ne: null },
        },
      },
      {
        $group: {
          _id: "$truckId",
          avgFuelEfficiency: { $avg: { $toDouble: "$fuelEfficiency" } },
          totalTrips: { $sum: 1 },
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
          avgFuelEfficiency: 1,
          totalTrips: 1,
        },
      },
    ]);

    // Driver performance
    const driverPerformance = await Trip.aggregate([
      {
        $match: {
          status: "completed",
        },
      },
      {
        $group: {
          _id: "$driverId",
          totalTrips: { $sum: 1 },
          totalDistance: { $sum: "$actualDistance" },
          avgFuelEfficiency: { $avg: { $toDouble: "$fuelEfficiency" } },
        },
      },
      {
        $lookup: {
          from: "drivers",
          localField: "_id",
          foreignField: "_id",
          as: "driver",
        },
      },
      { $unwind: "$driver" },
      {
        $project: {
          name: "$driver.name",
          rating: "$driver.rating",
          totalTrips: 1,
          totalDistance: 1,
          avgFuelEfficiency: 1,
        },
      },
      { $sort: { totalTrips: -1 } },
      { $limit: 10 },
    ]);

    return {
      tripTrends,
      fuelEfficiencyByTruck,
      driverPerformance,
    };
  }
}

module.exports = new DashboardService();
