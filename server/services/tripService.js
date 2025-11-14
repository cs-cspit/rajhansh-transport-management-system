// server/services/tripService.js
const Trip = require("../models/Trip");
const Truck = require("../models/truck");
const Driver = require("../models/Driver");
const { AppError } = require("../middleware/errorHandler");

class TripService {
  // Create trip
  async createTrip(tripData) {
    const { truckId, driverId } = tripData;

    // Validate truck exists
    const truck = await Truck.findById(truckId);
    if (!truck) {
      throw new AppError("Truck not found", 404);
    }

    // Validate driver exists
    const driver = await Driver.findById(driverId);
    if (!driver) {
      throw new AppError("Driver not found", 404);
    }

    // Check if driver is assigned to this truck
    if (driver.assignedTruck && driver.assignedTruck.toString() !== truckId) {
      throw new AppError("Driver is not assigned to this truck", 400);
    }

    // Create trip with default status
    const trip = await Trip.create({
      ...tripData,
      status: "ongoing",
      startTime: new Date(),
    });

    // Update truck status
    // truck.status = "in-transit";
    // await truck.save();

    return trip;
  }

  // Get all trips
  async getAllTrips(filters = {}) {
    const query = {};

    if (filters.status) {
      query.status = filters.status;
    }

    if (filters.driverId) {
      query.driverId = filters.driverId;
    }

    if (filters.truckId) {
      query.truckId = filters.truckId;
    }

    if (filters.startDate && filters.endDate) {
      query.startTime = {
        $gte: new Date(filters.startDate),
        $lte: new Date(filters.endDate),
      };
    }

    const trips = await Trip.find(query)
      .populate("truckId", "truckNumber modelName")
      .populate("driverId", "name contactNumber")
      .sort({ startTime: -1 });

    return trips;
  }

  // Get single trip
  async getTripById(tripId) {
    const trip = await Trip.findById(tripId)
      .populate("truckId", "truckNumber modelName capacity")
      .populate("driverId", "name contactNumber licenseNumber");

    if (!trip) {
      throw new AppError("Trip not found", 404);
    }

    return trip;
  }

  // Update trip
  async updateTrip(tripId, tripData) {
    const trip = await Trip.findById(tripId);

    if (!trip) {
      throw new AppError("Trip not found", 404);
    }

    // Only allow updates if not completed
    if (trip.status === "completed") {
      throw new AppError("Cannot update completed trip", 400);
    }

    // Update fields
    Object.keys(tripData).forEach((key) => {
      if (tripData[key] !== undefined) {
        trip[key] = tripData[key];
      }
    });

    await trip.save();

    return trip;
  }

  // Complete trip
  async completeTrip(tripId, completionData) {
    const trip = await Trip.findById(tripId);

    if (!trip) {
      throw new AppError("Trip not found", 404);
    }

    if (trip.status === "completed") {
      throw new AppError("Trip already completed", 400);
    }

    // Update trip with completion data
    trip.status = "completed";
    trip.endTime = new Date();
    trip.completionDate = new Date();
    trip.actualDistance = completionData.actualDistance || trip.distance;
    trip.fuelUsed = completionData.fuelUsed || null;
    trip.fuelCost = completionData.fuelCost || null;
    trip.notes = completionData.notes || trip.notes;

    await trip.save();

    // Update truck status back to active
    // const truck = await Truck.findById(trip.truckId);
    // if (truck) {
    //   truck.status = "active";
    //   await truck.save();
    // }

    return trip;
  }

  // Cancel trip
  async cancelTrip(tripId, reason) {
    const trip = await Trip.findById(tripId);

    if (!trip) {
      throw new AppError("Trip not found", 404);
    }

    if (trip.status === "completed") {
      throw new AppError("Cannot cancel completed trip", 400);
    }

    trip.status = "cancelled";
    trip.cancelReason = reason || "No reason provided";
    trip.endTime = new Date();

    await trip.save();

    // Update truck status back to active
    // const truck = await Truck.findById(trip.truckId);
    // if (truck) {
    //   truck.status = "active";
    //   await truck.save();
    // }

    return trip;
  }

  // Delete trip
  async deleteTrip(tripId) {
    const trip = await Trip.findById(tripId);

    if (!trip) {
      throw new AppError("Trip not found", 404);
    }

    // Only allow deletion if not completed
    if (trip.status === "completed") {
      throw new AppError("Cannot delete completed trip", 400);
    }

    await trip.deleteOne();

    return { message: "Trip deleted successfully" };
  }

  // Get trip statistics
  async getTripStats(filters = {}) {
    const query = {};

    if (filters.driverId) {
      query.driverId = filters.driverId;
    }

    if (filters.truckId) {
      query.truckId = filters.truckId;
    }

    if (filters.startDate && filters.endDate) {
      query.startTime = {
        $gte: new Date(filters.startDate),
        $lte: new Date(filters.endDate),
      };
    }

    const stats = await Trip.aggregate([
      { $match: query },
      {
        $group: {
          _id: null,
          totalTrips: { $sum: 1 },
          completedTrips: {
            $sum: { $cond: [{ $eq: ["$status", "completed"] }, 1, 0] },
          },
          ongoingTrips: {
            $sum: { $cond: [{ $eq: ["$status", "ongoing"] }, 1, 0] },
          },
          cancelledTrips: {
            $sum: { $cond: [{ $eq: ["$status", "cancelled"] }, 1, 0] },
          },
          totalDistance: {
            $sum: { $ifNull: ["$actualDistance", "$distance"] },
          },
          totalFuelUsed: { $sum: { $ifNull: ["$fuelUsed", 0] } },
          averageFuelEfficiency: {
            $avg: {
              $cond: [
                {
                  $and: [
                    { $gt: ["$fuelUsed", 0] },
                    { $gt: ["$actualDistance", 0] },
                  ],
                },
                { $divide: ["$actualDistance", "$fuelUsed"] },
                null,
              ],
            },
          },
        },
      },
    ]);

    return (
      stats[0] || {
        totalTrips: 0,
        completedTrips: 0,
        ongoingTrips: 0,
        cancelledTrips: 0,
        totalDistance: 0,
        totalFuelUsed: 0,
        averageFuelEfficiency: 0,
      }
    );
  }

  // Get driver trips
  async getDriverTrips(driverId, filters = {}) {
    const query = { driverId };

    if (filters.status) {
      query.status = filters.status;
    }

    const trips = await Trip.find(query)
      .populate("truckId", "truckNumber modelName")
      .sort({ startTime: -1 });

    return trips;
  }

  // Get truck trips
  async getTruckTrips(truckId, filters = {}) {
    const query = { truckId };

    if (filters.status) {
      query.status = filters.status;
    }

    const trips = await Trip.find(query)
      .populate("driverId", "name contactNumber")
      .sort({ startTime: -1 });

    return trips;
  }
}

module.exports = new TripService();
