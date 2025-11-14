// server/routes/expenseRoutes.js
const express = require("express");
const expenseController = require("../controllers/expenseController");
const { authenticateOwner } = require("../middleware/auth");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// Ensure directory exists
const expenseInvoicesDir = "uploads/expenses/invoices";
if (!fs.existsSync(expenseInvoicesDir)) {
  fs.mkdirSync(expenseInvoicesDir, { recursive: true });
}

// Configure multer for invoice uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, expenseInvoicesDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `expense-invoice-${Date.now()}${ext}`);
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
      cb(new Error("Invalid file type"), false);
    }
  },
});

// All routes require owner authentication
router.use(authenticateOwner);

router
  .route("/")
  .get(expenseController.getAllExpenses)
  .post(upload.single("invoice"), expenseController.createExpense);

router.get("/stats", expenseController.getExpenseStats);
router.get("/breakdown", expenseController.getExpenseBreakdown);
router.get("/trends", expenseController.getExpenseTrends);
router.get("/report", expenseController.generateExpenseReport);

router
  .route("/:id")
  .get(expenseController.getExpenseById)
  .put(upload.single("invoice"), expenseController.updateExpense)
  .delete(expenseController.deleteExpense);

router.post("/:id/approve", expenseController.approveExpense);
router.post("/:id/mark-paid", expenseController.markExpenseAsPaid);

module.exports = router;
