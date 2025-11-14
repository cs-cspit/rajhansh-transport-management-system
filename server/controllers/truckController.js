// server/controllers/truckController.js
const truckService = require("../services/truckService");
const { AppError } = require("../middleware/errorHandler");

class TruckController {
  // Get all trucks
  async getAllTrucks(req, res, next) {
    try {
      const filters = {
        status: req.query.status,
        search: req.query.search,
      };

      const trucks = await truckService.getAllTrucks(filters);

      res.status(200).json({
        status: "success",
        results: trucks.length,
        data: { trucks },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get single truck
  async getTruckById(req, res, next) {
    try {
      const truck = await truckService.getTruckById(req.params.id);

      res.status(200).json({
        status: "success",
        data: { truck },
      });
    } catch (error) {
      next(error);
    }
  }

  // Create truck
  async createTruck(req, res, next) {
    try {
      const truck = await truckService.createTruck(req.body, req.files || {});

      res.status(201).json({
        status: "success",
        message: "Truck created successfully",
        data: { truck },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update truck
  async updateTruck(req, res, next) {
    try {
      const truck = await truckService.updateTruck(
        req.params.id,
        req.body,
        req.files || {}
      );

      res.status(200).json({
        status: "success",
        message: "Truck updated successfully",
        data: { truck },
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete truck
  async deleteTruck(req, res, next) {
    try {
      const result = await truckService.deleteTruck(req.params.id);

      res.status(200).json({
        status: "success",
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  // Assign driver to truck
  async assignDriver(req, res, next) {
    try {
      const { driverId } = req.body;

      if (!driverId) {
        return next(new AppError("Driver ID is required", 400));
      }

      const result = await truckService.assignDriver(req.params.id, driverId);

      res.status(200).json({
        status: "success",
        message: "Driver assigned successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // Unassign driver from truck
  async unassignDriver(req, res, next) {
    try {
      const result = await truckService.unassignDriver(req.params.id);

      res.status(200).json({
        status: "success",
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get trucks with expiring documents
  async getExpiringDocuments(req, res, next) {
    try {
      const days = parseInt(req.query.days) || 30;
      const trucks = await truckService.getExpiringDocuments(days);

      res.status(200).json({
        status: "success",
        results: trucks.length,
        data: { trucks },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update truck status
  async updateTruckStatus(req, res, next) {
    try {
      const { status } = req.body;

      if (!status) {
        return next(new AppError("Status is required", 400));
      }

      const truck = await truckService.updateTruckStatus(req.params.id, status);

      res.status(200).json({
        status: "success",
        message: "Truck status updated successfully",
        data: { truck },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TruckController();
