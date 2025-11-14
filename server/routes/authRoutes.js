// server/routes/authRoutes.js
const express = require("express");
const authController = require("../controllers/authController");
const {
  authenticateOwner,
  authenticateDriver,
  authenticateAny,
} = require("../middleware/auth");

const router = express.Router();

// Public routes
router.post("/owner/register", authController.registerOwner);
router.post("/owner/login", authController.loginOwner);
router.post("/driver/login", authController.loginDriver);

// Protected routes
router.use(authenticateAny); // Protect all routes below
router.get("/me", authController.getCurrentUser);
router.post("/change-password", authController.changePassword);
router.post("/logout", authController.logout);

module.exports = router;
