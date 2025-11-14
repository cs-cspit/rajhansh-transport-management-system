// server/controllers/salaryController.js
const salaryService = require("../services/salaryService");
const { AppError } = require("../middleware/errorHandler");

class SalaryController {
  // Get all salaries
  async getAllSalaries(req, res, next) {
    try {
      const filters = {
        driverId: req.query.driverId,
        status: req.query.status,
        month: req.query.month,
        year: req.query.year,
      };

      const salaries = await salaryService.getAllSalaries(filters);

      res.status(200).json({
        status: "success",
        results: salaries.length,
        data: { salaries },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get single salary
  async getSalaryById(req, res, next) {
    try {
      const salary = await salaryService.getSalaryById(req.params.id);

      res.status(200).json({
        status: "success",
        data: { salary },
      });
    } catch (error) {
      next(error);
    }
  }

  // Generate salary
  async generateSalary(req, res, next) {
    try {
      const { driverId, month, year } = req.body;

      if (!driverId || !month || !year) {
        return next(
          new AppError("Driver ID, month, and year are required", 400)
        );
      }

      const salary = await salaryService.generateSalary(driverId, month, year);

      res.status(201).json({
        status: "success",
        message: "Salary generated successfully",
        data: { salary },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update salary
  async updateSalary(req, res, next) {
    try {
      const salary = await salaryService.updateSalary(req.params.id, req.body);

      res.status(200).json({
        status: "success",
        message: "Salary updated successfully",
        data: { salary },
      });
    } catch (error) {
      next(error);
    }
  }

  // Approve salary
  async approveSalary(req, res, next) {
    try {
      const ownerId = req.user._id;
      const { notes } = req.body;

      const salary = await salaryService.approveSalary(
        req.params.id,
        ownerId,
        notes
      );

      res.status(200).json({
        status: "success",
        message: "Salary approved successfully",
        data: { salary },
      });
    } catch (error) {
      next(error);
    }
  }

  // Mark salary as paid
  async markSalaryAsPaid(req, res, next) {
    try {
      const salary = await salaryService.markSalaryAsPaid(
        req.params.id,
        req.body
      );

      res.status(200).json({
        status: "success",
        message: "Salary marked as paid",
        data: { salary },
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete salary
  async deleteSalary(req, res, next) {
    try {
      const result = await salaryService.deleteSalary(req.params.id);

      res.status(200).json({
        status: "success",
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get salary statistics
  async getSalaryStats(req, res, next) {
    try {
      const filters = {
        month: req.query.month,
        year: req.query.year,
      };

      const stats = await salaryService.getSalaryStats(filters);

      res.status(200).json({
        status: "success",
        data: { stats },
      });
    } catch (error) {
      next(error);
    }
  }

  // Generate salary report
  async generateSalaryReport(req, res, next) {
    try {
      const { month, year } = req.query;

      if (!month || !year) {
        return next(new AppError("Month and year are required", 400));
      }

      const report = await salaryService.generateSalaryReport(
        parseInt(month),
        parseInt(year)
      );

      res.status(200).json({
        status: "success",
        data: report,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get driver salary history
  async getDriverSalaryHistory(req, res, next) {
    try {
      const { driverId } = req.params;
      const limit = parseInt(req.query.limit) || 12;

      const history = await salaryService.getDriverSalaryHistory(
        driverId,
        limit
      );

      res.status(200).json({
        status: "success",
        results: history.length,
        data: { history },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new SalaryController();
