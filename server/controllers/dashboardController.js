// server/controllers/dashboardController.js
const dashboardService = require("../services/dashboardService");

class DashboardController {
  // Get owner dashboard
  async getOwnerDashboard(req, res, next) {
    try {
      const dashboard = await dashboardService.getOwnerDashboard();

      res.status(200).json({
        status: "success",
        data: dashboard,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get driver dashboard
  async getDriverDashboard(req, res, next) {
    try {
      const driverId = req.user._id; // From auth middleware
      const dashboard = await dashboardService.getDriverDashboard(driverId);

      res.status(200).json({
        status: "success",
        data: dashboard,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get analytics
  async getAnalytics(req, res, next) {
    try {
      const period = req.query.period || "30days";
      const analytics = await dashboardService.getAnalytics(period);

      res.status(200).json({
        status: "success",
        data: analytics,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DashboardController();
