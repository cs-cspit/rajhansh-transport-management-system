// server/services/salaryService.js
const Salary = require("../models/Salary");
const Driver = require("../models/Driver");
const Trip = require("../models/Trip");
const { AppError } = require("../middleware/errorHandler");

class SalaryService {
  // Get all salaries
  async getAllSalaries(filters = {}) {
    const query = {};

    if (filters.driverId) {
      query.driverId = filters.driverId;
    }

    if (filters.status) {
      query.status = filters.status;
    }

    if (filters.month) {
      query.month = parseInt(filters.month);
    }

    if (filters.year) {
      query.year = parseInt(filters.year);
    }

    const salaries = await Salary.find(query)
      .populate("driverId", "name contactNumber licenseNumber")
      .populate("approvedBy", "email companyName")
      .sort({ year: -1, month: -1 });

    return salaries;
  }

  // Get single salary
  async getSalaryById(salaryId) {
    const salary = await Salary.findById(salaryId)
      .populate("driverId", "name contactNumber licenseNumber experienceYears")
      .populate("approvedBy", "email companyName");

    if (!salary) {
      throw new AppError("Salary record not found", 404);
    }

    return salary;
  }

  // Generate salary for driver
  async generateSalary(driverId, month, year) {
    // Check if driver exists
    const driver = await Driver.findById(driverId);
    if (!driver) {
      throw new AppError("Driver not found", 404);
    }

    // Check if salary already exists
    const existingSalary = await Salary.findOne({ driverId, month, year });
    if (existingSalary) {
      throw new AppError("Salary already generated for this month", 400);
    }

    // Get trips for the month
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59);

    const trips = await Trip.find({
      driverId,
      status: "completed",
      completionDate: {
        $gte: startDate,
        $lte: endDate,
      },
    });

    // Calculate metrics
    const tripsCompleted = trips.length;
    const totalDistance = trips.reduce(
      (sum, trip) => sum + (trip.actualDistance || 0),
      0
    );
    const totalWorkingDays = new Set(
      trips.map((trip) => trip.completionDate.toISOString().split("T")[0])
    ).size;

    // Calculate trip bonus (₹50 per trip completed)
    const tripBonus = tripsCompleted * 50;

    // Calculate performance bonus based on rating
    let performanceBonus = 0;
    if (driver.rating >= 4.5) {
      performanceBonus = 2000;
    } else if (driver.rating >= 4.0) {
      performanceBonus = 1000;
    } else if (driver.rating >= 3.5) {
      performanceBonus = 500;
    }

    // Calculate overtime (if working days > 26)
    const overtimeAmount =
      totalWorkingDays > 26 ? (totalWorkingDays - 26) * 500 : 0;

    // Create salary record
    const salary = await Salary.create({
      driverId,
      month,
      year,
      baseSalary: 25000, // Default base salary
      tripBonus,
      performanceBonus,
      overtimeAmount,
      tripsCompleted,
      totalDistance,
      totalWorkingDays,
    });

    return salary;
  }

  // Update salary
  async updateSalary(salaryId, salaryData) {
    const salary = await Salary.findById(salaryId);

    if (!salary) {
      throw new AppError("Salary record not found", 404);
    }

    // Only allow updates if not paid
    if (salary.status === "paid") {
      throw new AppError("Cannot update paid salary", 400);
    }

    // Update fields
    Object.keys(salaryData).forEach((key) => {
      if (salaryData[key] !== undefined) {
        if (key === "deductions") {
          Object.keys(salaryData.deductions).forEach((deductionKey) => {
            salary.deductions[deductionKey] =
              salaryData.deductions[deductionKey];
          });
        } else {
          salary[key] = salaryData[key];
        }
      }
    });

    await salary.save();

    return salary;
  }

  // Approve salary
  async approveSalary(salaryId, ownerId, notes) {
    const salary = await Salary.findById(salaryId);

    if (!salary) {
      throw new AppError("Salary record not found", 404);
    }

    if (salary.status === "paid") {
      throw new AppError("Salary already paid", 400);
    }

    salary.status = "approved";
    salary.approvedBy = ownerId;
    if (notes) salary.notes = notes;

    await salary.save();

    return salary;
  }

  // Mark salary as paid
  async markSalaryAsPaid(salaryId, paymentData) {
    const salary = await Salary.findById(salaryId);

    if (!salary) {
      throw new AppError("Salary record not found", 404);
    }

    if (salary.status === "paid") {
      throw new AppError("Salary already marked as paid", 400);
    }

    salary.status = "paid";
    salary.paidOn = new Date();
    salary.paymentMethod = paymentData.paymentMethod || "bank-transfer";
    salary.transactionReference = paymentData.transactionReference || null;

    await salary.save();

    return salary;
  }

  // Delete salary
  async deleteSalary(salaryId) {
    const salary = await Salary.findById(salaryId);

    if (!salary) {
      throw new AppError("Salary record not found", 404);
    }

    // Only allow deletion if not paid
    if (salary.status === "paid") {
      throw new AppError("Cannot delete paid salary", 400);
    }

    await salary.deleteOne();

    return { message: "Salary record deleted successfully" };
  }

  // Get salary statistics
  async getSalaryStats(filters = {}) {
    const query = {};

    if (filters.month) {
      query.month = parseInt(filters.month);
    }

    if (filters.year) {
      query.year = parseInt(filters.year);
    }

    const stats = await Salary.aggregate([
      { $match: query },
      {
        $group: {
          _id: null,
          totalSalaries: { $sum: 1 },
          totalPaid: { $sum: "$netSalary" },
          avgSalary: { $avg: "$netSalary" },
          totalDeductions: { $sum: "$totalDeductions" },
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
        totalSalaries: 0,
        totalPaid: 0,
        avgSalary: 0,
        totalDeductions: 0,
        pending: 0,
        approved: 0,
        paid: 0,
      }
    );
  }

  // Generate salary report
  async generateSalaryReport(month, year) {
    const salaries = await Salary.find({ month, year })
      .populate("driverId", "name contactNumber licenseNumber")
      .sort({ "driverId.name": 1 });

    const summary = {
      month,
      year,
      totalDrivers: salaries.length,
      totalBaseSalary: salaries.reduce((sum, s) => sum + s.baseSalary, 0),
      totalBonuses: salaries.reduce(
        (sum, s) => sum + s.tripBonus + s.performanceBonus + s.overtimeAmount,
        0
      ),
      totalDeductions: salaries.reduce((sum, s) => sum + s.totalDeductions, 0),
      totalNetSalary: salaries.reduce((sum, s) => sum + s.netSalary, 0),
      statusBreakdown: {
        pending: salaries.filter((s) => s.status === "pending").length,
        approved: salaries.filter((s) => s.status === "approved").length,
        paid: salaries.filter((s) => s.status === "paid").length,
      },
    };

    return {
      summary,
      salaries,
      generatedAt: new Date(),
    };
  }

  // Get driver salary history
  async getDriverSalaryHistory(driverId, limit = 12) {
    const history = await Salary.find({ driverId })
      .sort({ year: -1, month: -1 })
      .limit(limit);

    return history;
  }
}

module.exports = new SalaryService();
