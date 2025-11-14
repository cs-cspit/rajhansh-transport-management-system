// server/controllers/expenseController.js
const expenseService = require("../services/expenseService");
const { AppError } = require("../middleware/errorHandler");

class ExpenseController {
  // Get all expenses
  async getAllExpenses(req, res, next) {
    try {
      const filters = {
        category: req.query.category,
        status: req.query.status,
        truckId: req.query.truckId,
        driverId: req.query.driverId,
        startDate: req.query.startDate,
        endDate: req.query.endDate,
      };

      const expenses = await expenseService.getAllExpenses(filters);

      res.status(200).json({
        status: "success",
        results: expenses.length,
        data: { expenses },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get single expense
  async getExpenseById(req, res, next) {
    try {
      const expense = await expenseService.getExpenseById(req.params.id);

      res.status(200).json({
        status: "success",
        data: { expense },
      });
    } catch (error) {
      next(error);
    }
  }

  // Create expense
  async createExpense(req, res, next) {
    try {
      const invoiceFile = req.file;
      const expense = await expenseService.createExpense(req.body, invoiceFile);

      res.status(201).json({
        status: "success",
        message: "Expense created successfully",
        data: { expense },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update expense
  async updateExpense(req, res, next) {
    try {
      const invoiceFile = req.file;
      const expense = await expenseService.updateExpense(
        req.params.id,
        req.body,
        invoiceFile
      );

      res.status(200).json({
        status: "success",
        message: "Expense updated successfully",
        data: { expense },
      });
    } catch (error) {
      next(error);
    }
  }

  // Approve expense
  async approveExpense(req, res, next) {
    try {
      const ownerId = req.user._id;
      const { notes } = req.body;

      const expense = await expenseService.approveExpense(
        req.params.id,
        ownerId,
        notes
      );

      res.status(200).json({
        status: "success",
        message: "Expense approved successfully",
        data: { expense },
      });
    } catch (error) {
      next(error);
    }
  }

  // Mark expense as paid
  async markExpenseAsPaid(req, res, next) {
    try {
      const expense = await expenseService.markExpenseAsPaid(req.params.id);

      res.status(200).json({
        status: "success",
        message: "Expense marked as paid",
        data: { expense },
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete expense
  async deleteExpense(req, res, next) {
    try {
      const result = await expenseService.deleteExpense(req.params.id);

      res.status(200).json({
        status: "success",
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get expense statistics
  async getExpenseStats(req, res, next) {
    try {
      const filters = {
        startDate: req.query.startDate,
        endDate: req.query.endDate,
      };

      const stats = await expenseService.getExpenseStats(filters);

      res.status(200).json({
        status: "success",
        data: { stats },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get expense breakdown
  async getExpenseBreakdown(req, res, next) {
    try {
      const filters = {
        startDate: req.query.startDate,
        endDate: req.query.endDate,
      };

      const breakdown = await expenseService.getExpenseBreakdown(filters);

      res.status(200).json({
        status: "success",
        data: { breakdown },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get expense trends
  async getExpenseTrends(req, res, next) {
    try {
      const months = parseInt(req.query.months) || 6;
      const trends = await expenseService.getExpenseTrends(months);

      res.status(200).json({
        status: "success",
        data: { trends },
      });
    } catch (error) {
      next(error);
    }
  }

  // Generate expense report
  async generateExpenseReport(req, res, next) {
    try {
      const { startDate, endDate } = req.query;

      if (!startDate || !endDate) {
        return next(new AppError("Start date and end date are required", 400));
      }

      const report = await expenseService.generateExpenseReport(
        startDate,
        endDate
      );

      res.status(200).json({
        status: "success",
        data: report,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ExpenseController();
