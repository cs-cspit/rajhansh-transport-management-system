// server/routes/truckRoutes.js
const express = require("express");
const truckController = require("../controllers/truckController");
const { authenticateOwner } = require("../middleware/auth");
const { validateTruckData } = require("../middleware/validation");
const { upload, fileFields } = require("../config/multer");

const router = express.Router();

// All routes require owner authentication
router.use(authenticateOwner);

router
  .route("/")
  .get(truckController.getAllTrucks)
  .post(
    upload.fields(fileFields),
    validateTruckData,
    truckController.createTruck
  );

router.get("/expiring-documents", truckController.getExpiringDocuments);

router
  .route("/:id")
  .get(truckController.getTruckById)
  .put(upload.fields(fileFields), truckController.updateTruck)
  .delete(truckController.deleteTruck);

router.post("/:id/assign-driver", truckController.assignDriver);
router.post("/:id/unassign-driver", truckController.unassignDriver);
router.patch("/:id/status", truckController.updateTruckStatus);

module.exports = router;
