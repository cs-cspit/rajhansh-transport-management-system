// server/controllers/driverController.js
const driverService = require("../services/driverService");
const { AppError } = require("../middleware/errorHandler");

class DriverController {
  // Get all drivers
  async getAllDrivers(req, res, next) {
    try {
      const filters = {
        status: req.query.status,
        search: req.query.search,
      };

      const drivers = await driverService.getAllDrivers(filters);

      res.status(200).json({
        status: "success",
        results: drivers.length,
        data: { drivers },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get single driver
  async getDriverById(req, res, next) {
    try {
      const driver = await driverService.getDriverById(req.params.id);

      res.status(200).json({
        status: "success",
        data: { driver },
      });
    } catch (error) {
      next(error);
    }
  }

  // Create driver
  async createDriver(req, res, next) {
    try {
      const driver = await driverService.createDriver(req.body);

      res.status(201).json({
        status: "success",
        message: "Driver created successfully",
        data: { driver },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update driver
  async updateDriver(req, res, next) {
    try {
      const driver = await driverService.updateDriver(req.params.id, req.body);

      res.status(200).json({
        status: "success",
        message: "Driver updated successfully",
        data: { driver },
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete driver
  async deleteDriver(req, res, next) {
    try {
      const result = await driverService.deleteDriver(req.params.id);

      res.status(200).json({
        status: "success",
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update driver status
  async updateDriverStatus(req, res, next) {
    try {
      const { status } = req.body;

      if (!status) {
        return next(new AppError("Status is required", 400));
      }

      const driver = await driverService.updateDriverStatus(
        req.params.id,
        status
      );

      res.status(200).json({
        status: "success",
        message: "Driver status updated successfully",
        data: { driver },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update driver rating
  async updateDriverRating(req, res, next) {
    try {
      const { rating } = req.body;

      if (rating === undefined) {
        return next(new AppError("Rating is required", 400));
      }

      const driver = await driverService.updateDriverRating(
        req.params.id,
        rating
      );

      res.status(200).json({
        status: "success",
        message: "Driver rating updated successfully",
        data: { driver },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get drivers with expiring licenses
  async getExpiringLicenses(req, res, next) {
    try {
      const days = parseInt(req.query.days) || 30;
      const drivers = await driverService.getExpiringLicenses(days);

      res.status(200).json({
        status: "success",
        results: drivers.length,
        data: { drivers },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get available drivers
  async getAvailableDrivers(req, res, next) {
    try {
      const drivers = await driverService.getAvailableDrivers();

      res.status(200).json({
        status: "success",
        results: drivers.length,
        data: { drivers },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get driver statistics
  async getDriverStats(req, res, next) {
    try {
      const stats = await driverService.getDriverStats(req.params.id);

      res.status(200).json({
        status: "success",
        data: { stats },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DriverController();
