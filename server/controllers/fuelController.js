// server/controllers/fuelController.js
const fuelService = require("../services/fuelService");
const { AppError } = require("../middleware/errorHandler");

class FuelController {
  // Get all fuel logs
  async getAllFuelLogs(req, res, next) {
    try {
      const filters = {
        truckId: req.query.truckId,
        driverId: req.query.driverId,
        verificationStatus: req.query.verificationStatus,
        isAnomaly: req.query.isAnomaly,
        startDate: req.query.startDate,
        endDate: req.query.endDate,
      };

      const fuelLogs = await fuelService.getAllFuelLogs(filters);

      res.status(200).json({
        status: "success",
        results: fuelLogs.length,
        data: { fuelLogs },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get single fuel log
  async getFuelLogById(req, res, next) {
    try {
      const fuelLog = await fuelService.getFuelLogById(req.params.id);

      res.status(200).json({
        status: "success",
        data: { fuelLog },
      });
    } catch (error) {
      next(error);
    }
  }

  // Create fuel log
  async createFuelLog(req, res, next) {
    try {
      const receiptFile = req.file;
      const fuelLog = await fuelService.createFuelLog(req.body, receiptFile);

      res.status(201).json({
        status: "success",
        message: "Fuel log created successfully",
        data: { fuelLog },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update fuel log
  async updateFuelLog(req, res, next) {
    try {
      const receiptFile = req.file;
      const fuelLog = await fuelService.updateFuelLog(
        req.params.id,
        req.body,
        receiptFile
      );

      res.status(200).json({
        status: "success",
        message: "Fuel log updated successfully",
        data: { fuelLog },
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete fuel log
  async deleteFuelLog(req, res, next) {
    try {
      const result = await fuelService.deleteFuelLog(req.params.id);

      res.status(200).json({
        status: "success",
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  // Verify fuel log
  async verifyFuelLog(req, res, next) {
    try {
      const ownerId = req.user._id;
      const fuelLog = await fuelService.verifyFuelLog(
        req.params.id,
        ownerId,
        req.body
      );

      res.status(200).json({
        status: "success",
        message: "Fuel log verified successfully",
        data: { fuelLog },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get fuel statistics
  async getFuelStats(req, res, next) {
    try {
      const filters = {
        truckId: req.query.truckId,
        driverId: req.query.driverId,
        startDate: req.query.startDate,
        endDate: req.query.endDate,
      };

      const stats = await fuelService.getFuelStats(filters);

      res.status(200).json({
        status: "success",
        data: { stats },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get fuel trends
  async getFuelTrends(req, res, next) {
    try {
      const days = parseInt(req.query.days) || 30;
      const trends = await fuelService.getFuelTrends(days);

      res.status(200).json({
        status: "success",
        data: { trends },
      });
    } catch (error) {
      next(error);
    }
  }

  // Compare truck efficiency
  async compareTruckEfficiency(req, res, next) {
    try {
      const comparison = await fuelService.compareTruckEfficiency();

      res.status(200).json({
        status: "success",
        data: { comparison },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get pending verifications
  async getPendingVerifications(req, res, next) {
    try {
      const pending = await fuelService.getPendingVerifications();

      res.status(200).json({
        status: "success",
        results: pending.length,
        data: { pending },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new FuelController();
