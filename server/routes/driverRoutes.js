// server/routes/driverRoutes.js
const express = require("express");
const driverController = require("../controllers/driverController");
const { authenticateOwner } = require("../middleware/auth");
const { validateDriverData } = require("../middleware/validation");

const router = express.Router();

// All routes require owner authentication
// router.use(authenticateOwner);

router
  .route("/")
  .get(driverController.getAllDrivers)
  .post(validateDriverData, driverController.createDriver);

router.get("/available", driverController.getAvailableDrivers);
router.get("/expiring-licenses", driverController.getExpiringLicenses);

router
  .route("/:id")
  .get(driverController.getDriverById)
  .put(driverController.updateDriver)
  .delete(driverController.deleteDriver);

router.get("/:id/stats", driverController.getDriverStats);
router.patch("/:id/status", driverController.updateDriverStatus);
router.patch("/:id/rating", driverController.updateDriverRating);

module.exports = router;
