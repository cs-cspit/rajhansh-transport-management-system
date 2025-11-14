// server/controllers/maintenanceController.js
const maintenanceService = require("../services/maintenanceService");
const { AppError } = require("../middleware/errorHandler");

class MaintenanceController {
  // Get all maintenance logs
  async getAllMaintenanceLogs(req, res, next) {
    try {
      const filters = {
        truckId: req.query.truckId,
        status: req.query.status,
        maintenanceType: req.query.maintenanceType,
        category: req.query.category,
        priority: req.query.priority,
        startDate: req.query.startDate,
        endDate: req.query.endDate,
      };

      const logs = await maintenanceService.getAllMaintenanceLogs(filters);

      res.status(200).json({
        status: "success",
        results: logs.length,
        data: { maintenanceLogs: logs },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get single maintenance log
  async getMaintenanceLogById(req, res, next) {
    try {
      const log = await maintenanceService.getMaintenanceLogById(req.params.id);

      res.status(200).json({
        status: "success",
        data: { maintenanceLog: log },
      });
    } catch (error) {
      next(error);
    }
  }

  // Create maintenance log
  async createMaintenanceLog(req, res, next) {
    try {
      const log = await maintenanceService.createMaintenanceLog(
        req.body,
        req.files || {}
      );

      res.status(201).json({
        status: "success",
        message: "Maintenance log created successfully",
        data: { maintenanceLog: log },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update maintenance log
  async updateMaintenanceLog(req, res, next) {
    try {
      const log = await maintenanceService.updateMaintenanceLog(
        req.params.id,
        req.body,
        req.files || {}
      );

      res.status(200).json({
        status: "success",
        message: "Maintenance log updated successfully",
        data: { maintenanceLog: log },
      });
    } catch (error) {
      next(error);
    }
  }

  // Complete maintenance
  async completeMaintenance(req, res, next) {
    try {
      const log = await maintenanceService.completeMaintenance(
        req.params.id,
        req.body
      );

      res.status(200).json({
        status: "success",
        message: "Maintenance completed successfully",
        data: { maintenanceLog: log },
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete maintenance log
  async deleteMaintenanceLog(req, res, next) {
    try {
      const result = await maintenanceService.deleteMaintenanceLog(
        req.params.id
      );

      res.status(200).json({
        status: "success",
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get maintenance statistics
  async getMaintenanceStats(req, res, next) {
    try {
      const filters = {
        truckId: req.query.truckId,
        startDate: req.query.startDate,
        endDate: req.query.endDate,
      };

      const stats = await maintenanceService.getMaintenanceStats(filters);

      res.status(200).json({
        status: "success",
        data: { stats },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get maintenance due alerts
  async getMaintenanceDueAlerts(req, res, next) {
    try {
      const days = parseInt(req.query.days) || 30;
      const alerts = await maintenanceService.getMaintenanceDueAlerts(days);

      res.status(200).json({
        status: "success",
        results: alerts.length,
        data: { alerts },
      });
    } catch (error) {
      next(error);
    }
  }

  // Predictive maintenance
  async predictiveMaintenance(req, res, next) {
    try {
      const { truckId } = req.params;
      const predictions = await maintenanceService.predictiveMaintenance(
        truckId
      );

      res.status(200).json({
        status: "success",
        data: predictions,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get maintenance trends
  async getMaintenanceTrends(req, res, next) {
    try {
      const days = parseInt(req.query.days) || 90;
      const trends = await maintenanceService.getMaintenanceTrends(days);

      res.status(200).json({
        status: "success",
        data: { trends },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get cost breakdown
  async getCostBreakdown(req, res, next) {
    try {
      const filters = {
        truckId: req.query.truckId,
        startDate: req.query.startDate,
        endDate: req.query.endDate,
      };

      const breakdown = await maintenanceService.getCostBreakdown(filters);

      res.status(200).json({
        status: "success",
        data: { breakdown },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get truck maintenance history
  async getTruckMaintenanceHistory(req, res, next) {
    try {
      const { truckId } = req.params;
      const limit = parseInt(req.query.limit) || 10;
      const history = await maintenanceService.getTruckMaintenanceHistory(
        truckId,
        limit
      );

      res.status(200).json({
        status: "success",
        results: history.length,
        data: { history },
      });
    } catch (error) {
      next(error);
    }
  }

  // Approve maintenance
  async approveMaintenance(req, res, next) {
    try {
      const ownerId = req.user._id;
      const log = await maintenanceService.approveMaintenance(
        req.params.id,
        ownerId,
        req.body
      );

      res.status(200).json({
        status: "success",
        message: "Maintenance approved successfully",
        data: { maintenanceLog: log },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new MaintenanceController();
