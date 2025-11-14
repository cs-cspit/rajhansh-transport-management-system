// server/controllers/tripController.js
const tripService = require("../services/tripService");
const { AppError } = require("../middleware/errorHandler");

class TripController {
  // Get all trips
  async getAllTrips(req, res, next) {
    try {
      const filters = {
        status: req.query.status,
        driverId: req.query.driverId,
        truckId: req.query.truckId,
        startDate: req.query.startDate,
        endDate: req.query.endDate,
      };

      const trips = await tripService.getAllTrips(filters);

      res.status(200).json({
        status: "success",
        results: trips.length,
        data: { trips },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get single trip
  async getTripById(req, res, next) {
    try {
      const trip = await tripService.getTripById(req.params.id);

      res.status(200).json({
        status: "success",
        data: { trip },
      });
    } catch (error) {
      next(error);
    }
  }

  // Create trip
  async createTrip(req, res, next) {
    try {
      const trip = await tripService.createTrip(req.body);

      res.status(201).json({
        status: "success",
        message: "Trip created successfully",
        data: { trip },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update trip
  async updateTrip(req, res, next) {
    try {
      const trip = await tripService.updateTrip(req.params.id, req.body);

      res.status(200).json({
        status: "success",
        message: "Trip updated successfully",
        data: { trip },
      });
    } catch (error) {
      next(error);
    }
  }

  // Complete trip
  async completeTrip(req, res, next) {
    try {
      const trip = await tripService.completeTrip(req.params.id, req.body);

      res.status(200).json({
        status: "success",
        message: "Trip completed successfully",
        data: { trip },
      });
    } catch (error) {
      next(error);
    }
  }

  // Cancel trip
  async cancelTrip(req, res, next) {
    try {
      const { reason } = req.body;
      const trip = await tripService.cancelTrip(req.params.id, reason);

      res.status(200).json({
        status: "success",
        message: "Trip cancelled successfully",
        data: { trip },
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete trip
  async deleteTrip(req, res, next) {
    try {
      const result = await tripService.deleteTrip(req.params.id);

      res.status(200).json({
        status: "success",
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get trip statistics
  async getTripStats(req, res, next) {
    try {
      const filters = {
        driverId: req.query.driverId,
        truckId: req.query.truckId,
        startDate: req.query.startDate,
        endDate: req.query.endDate,
      };

      const stats = await tripService.getTripStats(filters);

      res.status(200).json({
        status: "success",
        data: { stats },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get driver trips
  async getDriverTrips(req, res, next) {
    try {
      const filters = {
        status: req.query.status,
      };

      const trips = await tripService.getDriverTrips(
        req.params.driverId,
        filters
      );

      res.status(200).json({
        status: "success",
        results: trips.length,
        data: { trips },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get truck trips
  async getTruckTrips(req, res, next) {
    try {
      const filters = {
        status: req.query.status,
      };

      const trips = await tripService.getTruckTrips(
        req.params.truckId,
        filters
      );

      res.status(200).json({
        status: "success",
        results: trips.length,
        data: { trips },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TripController();
