// server/routes/tripRoutes.js
const express = require("express");
const tripController = require("../controllers/tripController");
const {
  authenticateOwner,
  authenticateDriver,
  authenticateAny,
} = require("../middleware/auth");
const { validateTripData } = require("../middleware/validation");

const router = express.Router();

// Routes accessible by both owner and driver
router.use(authenticateAny);

router
  .route("/")
  .get(tripController.getAllTrips)
  .post(validateTripData, tripController.createTrip);

router.get("/stats", tripController.getTripStats);
router.get("/driver/:driverId", tripController.getDriverTrips);
router.get("/truck/:truckId", tripController.getTruckTrips);

router
  .route("/:id")
  .get(tripController.getTripById)
  .put(tripController.updateTrip)
  .delete(tripController.deleteTrip);

router.post("/:id/complete", tripController.completeTrip);
router.post("/:id/cancel", tripController.cancelTrip);

module.exports = router;
