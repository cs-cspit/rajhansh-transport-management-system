// server/routes/dashboardRoutes.js
const express = require("express");
const dashboardController = require("../controllers/dashboardController");
const { authenticateOwner, authenticateDriver } = require("../middleware/auth");

const router = express.Router();

router.get("/owner", authenticateOwner, dashboardController.getOwnerDashboard);
router.get(
  "/driver",
  authenticateDriver,
  dashboardController.getDriverDashboard
);
router.get("/analytics", authenticateOwner, dashboardController.getAnalytics);

module.exports = router;
