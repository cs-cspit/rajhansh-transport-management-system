// server/routes/salaryRoutes.js
const express = require("express");
const salaryController = require("../controllers/salaryController");
const { authenticateOwner } = require("../middleware/auth");

const router = express.Router();

// All routes require owner authentication
router.use(authenticateOwner);

router
  .route("/")
  .get(salaryController.getAllSalaries)
  .post(salaryController.generateSalary);

router.get("/stats", salaryController.getSalaryStats);
router.get("/report", salaryController.generateSalaryReport);
router.get(
  "/driver-history/:driverId",
  salaryController.getDriverSalaryHistory
);

router
  .route("/:id")
  .get(salaryController.getSalaryById)
  .put(salaryController.updateSalary)
  .delete(salaryController.deleteSalary);

router.post("/:id/approve", salaryController.approveSalary);
router.post("/:id/mark-paid", salaryController.markSalaryAsPaid);

module.exports = router;
