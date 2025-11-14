// server/services/expenseService.js
const Expense = require("../models/Expense");
const Truck = require("../models/truck");
const Driver = require("../models/Driver");
const { AppError } = require("../middleware/errorHandler");

class ExpenseService {
  // Get all expenses
  async getAllExpenses(filters = {}) {
    const query = {};

    if (filters.category) {
      query.category = filters.category;
    }

    if (filters.status) {
      query.status = filters.status;
    }

    if (filters.truckId) {
      query.truckId = filters.truckId;
    }

    if (filters.driverId) {
      query.driverId = filters.driverId;
    }

    if (filters.startDate && filters.endDate) {
      query.date = {
        $gte: new Date(filters.startDate),
        $lte: new Date(filters.endDate),
      };
    }

    const expenses = await Expense.find(query)
      .populate("truckId", "truckNumber modelName")
      .populate("driverId", "name contactNumber")
      .populate("approvedBy", "email companyName")
      .sort({ date: -1 });

    return expenses;
  }

  // Get single expense
  async getExpenseById(expenseId) {
    const expense = await Expense.findById(expenseId)
      .populate("truckId", "truckNumber modelName")
      .populate("driverId", "name contactNumber")
      .populate("approvedBy", "email companyName");

    if (!expense) {
      throw new AppError("Expense not found", 404);
    }

    return expense;
  }

  // Create expense
  async createExpense(expenseData, invoiceFile) {
    // Add invoice file path
    if (invoiceFile) {
      expenseData.invoiceDocument = invoiceFile.path;
    }

    // Create expense
    const expense = await Expense.create(expenseData);

    return expense;
  }

  // Update expense
  async updateExpense(expenseId, expenseData, invoiceFile) {
    const expense = await Expense.findById(expenseId);

    if (!expense) {
      throw new AppError("Expense not found", 404);
    }

    // Only allow updates if not paid
    if (expense.status === "paid") {
      throw new AppError("Cannot update paid expense", 400);
    }

    // Update invoice if new file
    if (invoiceFile) {
      expenseData.invoiceDocument = invoiceFile.path;
    }

    // Update fields
    Object.keys(expenseData).forEach((key) => {
      if (expenseData[key] !== undefined) {
        expense[key] = expenseData[key];
      }
    });

    await expense.save();

    return expense;
  }

  // Approve expense
  async approveExpense(expenseId, ownerId, notes) {
    const expense = await Expense.findById(expenseId);

    if (!expense) {
      throw new AppError("Expense not found", 404);
    }

    expense.status = "approved";
    expense.approvedBy = ownerId;
    if (notes) expense.notes = notes;

    await expense.save();

    return expense;
  }

  // Mark expense as paid
  async markExpenseAsPaid(expenseId) {
    const expense = await Expense.findById(expenseId);

    if (!expense) {
      throw new AppError("Expense not found", 404);
    }

    if (expense.status === "paid") {
      throw new AppError("Expense already marked as paid", 400);
    }

    expense.status = "paid";
    await expense.save();

    return expense;
  }

  // Delete expense
  async deleteExpense(expenseId) {
    const expense = await Expense.findById(expenseId);

    if (!expense) {
      throw new AppError("Expense not found", 404);
    }

    // Only allow deletion if not paid
    if (expense.status === "paid") {
      throw new AppError("Cannot delete paid expense", 400);
    }

    await expense.deleteOne();

    return { message: "Expense deleted successfully" };
  }

  // Get expense statistics
  async getExpenseStats(filters = {}) {
    const query = {};

    if (filters.startDate && filters.endDate) {
      query.date = {
        $gte: new Date(filters.startDate),
        $lte: new Date(filters.endDate),
      };
    }

    const stats = await Expense.aggregate([
      { $match: query },
      {
        $group: {
          _id: null,
          totalExpenses: { $sum: 1 },
          totalAmount: { $sum: "$amount" },
          avgExpense: { $avg: "$amount" },
          pending: {
            $sum: { $cond: [{ $eq: ["$status", "pending"] }, 1, 0] },
          },
          approved: {
            $sum: { $cond: [{ $eq: ["$status", "approved"] }, 1, 0] },
          },
          paid: {
            $sum: { $cond: [{ $eq: ["$status", "paid"] }, 1, 0] },
          },
        },
      },
    ]);

    return (
      stats[0] || {
        totalExpenses: 0,
        totalAmount: 0,
        avgExpense: 0,
        pending: 0,
        approved: 0,
        paid: 0,
      }
    );
  }

  // Get expense breakdown by category
  async getExpenseBreakdown(filters = {}) {
    const query = {};

    if (filters.startDate && filters.endDate) {
      query.date = {
        $gte: new Date(filters.startDate),
        $lte: new Date(filters.endDate),
      };
    }

    const breakdown = await Expense.aggregate([
      { $match: query },
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
          totalAmount: { $sum: "$amount" },
          avgAmount: { $avg: "$amount" },
        },
      },
      { $sort: { totalAmount: -1 } },
    ]);

    return breakdown;
  }

  // Get monthly expense trends
  async getExpenseTrends(months = 6) {
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - months);

    const trends = await Expense.aggregate([
      {
        $match: {
          date: { $gte: startDate },
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$date" },
            month: { $month: "$date" },
            category: "$category",
          },
          totalAmount: { $sum: "$amount" },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 },
      },
    ]);

    return trends;
  }

  // Generate expense report
  async generateExpenseReport(startDate, endDate) {
    const expenses = await Expense.find({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    })
      .populate("truckId", "truckNumber modelName")
      .populate("driverId", "name")
      .sort({ date: -1 });

    const summary = {
      startDate,
      endDate,
      totalExpenses: expenses.length,
      totalAmount: expenses.reduce((sum, e) => sum + e.amount, 0),
      categoryBreakdown: {},
      statusBreakdown: {
        pending: expenses.filter((e) => e.status === "pending").length,
        approved: expenses.filter((e) => e.status === "approved").length,
        paid: expenses.filter((e) => e.status === "paid").length,
      },
    };

    // Calculate category breakdown
    expenses.forEach((expense) => {
      if (!summary.categoryBreakdown[expense.category]) {
        summary.categoryBreakdown[expense.category] = {
          count: 0,
          amount: 0,
        };
      }
      summary.categoryBreakdown[expense.category].count++;
      summary.categoryBreakdown[expense.category].amount += expense.amount;
    });

    return {
      summary,
      expenses,
      generatedAt: new Date(),
    };
  }
}

module.exports = new ExpenseService();
