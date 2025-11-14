// server/routes/fuelRoutes.js
const express = require("express");
const fuelController = require("../controllers/fuelController");
const {
  authenticateOwner,
  authenticateDriver,
  authenticateAny,
} = require("../middleware/auth");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Configure multer for receipt uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/receipts");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `receipt-${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error("Invalid file type. Only JPEG, PNG, and PDF allowed"),
        false
      );
    }
  },
});

// Routes accessible by both owner and driver
router.use(authenticateAny);

router
  .route("/")
  .get(fuelController.getAllFuelLogs)
  .post(upload.single("receipt"), fuelController.createFuelLog);

router.get("/stats", fuelController.getFuelStats);
router.get("/trends", fuelController.getFuelTrends);
router.get("/compare-efficiency", fuelController.compareTruckEfficiency);
router.get(
  "/pending-verifications",
  authenticateOwner,
  fuelController.getPendingVerifications
);

router
  .route("/:id")
  .get(fuelController.getFuelLogById)
  .put(upload.single("receipt"), fuelController.updateFuelLog)
  .delete(fuelController.deleteFuelLog);

router.post("/:id/verify", authenticateOwner, fuelController.verifyFuelLog);

module.exports = router;
