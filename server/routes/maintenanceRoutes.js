// server/routes/maintenanceRoutes.js
const express = require("express");
const maintenanceController = require("../controllers/maintenanceController");
const {
  authenticateOwner,
  authenticateDriver,
  authenticateAny,
} = require("../middleware/auth");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// Ensure directories exist
const maintenanceImagesDir = "uploads/maintenance/images";
const maintenanceInvoicesDir = "uploads/maintenance/invoices";

[maintenanceImagesDir, maintenanceInvoicesDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "images") {
      cb(null, maintenanceImagesDir);
    } else if (file.fieldname === "invoice") {
      cb(null, maintenanceInvoicesDir);
    }
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
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
      cb(new Error("Invalid file type"), false);
    }
  },
});

// Routes accessible by both owner and driver
router.use(authenticateAny);

router
  .route("/")
  .get(maintenanceController.getAllMaintenanceLogs)
  .post(
    upload.fields([
      { name: "images", maxCount: 5 },
      { name: "invoice", maxCount: 1 },
    ]),
    maintenanceController.createMaintenanceLog
  );

router.get("/stats", maintenanceController.getMaintenanceStats);
router.get("/trends", maintenanceController.getMaintenanceTrends);
router.get("/cost-breakdown", maintenanceController.getCostBreakdown);
router.get("/due-alerts", maintenanceController.getMaintenanceDueAlerts);
router.get("/predictive/:truckId", maintenanceController.predictiveMaintenance);
router.get(
  "/truck-history/:truckId",
  maintenanceController.getTruckMaintenanceHistory
);

router
  .route("/:id")
  .get(maintenanceController.getMaintenanceLogById)
  .put(
    upload.fields([
      { name: "images", maxCount: 5 },
      { name: "invoice", maxCount: 1 },
    ]),
    maintenanceController.updateMaintenanceLog
  )
  .delete(maintenanceController.deleteMaintenanceLog);

router.post("/:id/complete", maintenanceController.completeMaintenance);
router.post(
  "/:id/approve",
  authenticateOwner,
  maintenanceController.approveMaintenance
);

module.exports = router;
