// server/services/maintenanceService.js
const MaintenanceLog = require("../models/MaintenanceLog");
const Truck = require("../models/truck");
const Driver = require("../models/Driver");
const { AppError } = require("../middleware/errorHandler");

class MaintenanceService {
  // Get all maintenance logs
  async getAllMaintenanceLogs(filters = {}) {
    const query = {};

    if (filters.truckId) {
      query.truckId = filters.truckId;
    }

    if (filters.status) {
      query.status = filters.status;
    }

    if (filters.maintenanceType) {
      query.maintenanceType = filters.maintenanceType;
    }

    if (filters.category) {
      query.category = filters.category;
    }

    if (filters.priority) {
      query.priority = filters.priority;
    }

    if (filters.startDate && filters.endDate) {
      query.startDate = {
        $gte: new Date(filters.startDate),
        $lte: new Date(filters.endDate),
      };
    }

    const maintenanceLogs = await MaintenanceLog.find(query)
      .populate("truckId", "truckNumber modelName")
      .populate("reportedBy", "name contactNumber")
      .populate("approvedBy", "email companyName")
      .sort({ startDate: -1 });

    return maintenanceLogs;
  }

  // Get single maintenance log
  async getMaintenanceLogById(logId) {
    const log = await MaintenanceLog.findById(logId)
      .populate("truckId", "truckNumber modelName capacity")
      .populate("reportedBy", "name contactNumber licenseNumber")
      .populate("approvedBy", "email companyName");

    if (!log) {
      throw new AppError("Maintenance log not found", 404);
    }

    return log;
  }

  // Create maintenance log
  async createMaintenanceLog(logData, files) {
    const { truckId } = logData;

    // Validate truck
    const truck = await Truck.findById(truckId);
    if (!truck) {
      throw new AppError("Truck not found", 404);
    }

    // Add uploaded files
    if (files && files.images) {
      logData.images = files.images.map((file) => file.path);
    }

    if (files && files.invoice) {
      logData.invoiceDocument = files.invoice[0].path;
    }

    // Create maintenance log
    const maintenanceLog = await MaintenanceLog.create(logData);

    // Update truck status if emergency or breakdown
    if (
      logData.maintenanceType === "emergency" ||
      logData.maintenanceType === "breakdown"
    ) {
      truck.status = "maintenance";
      await truck.save();
    }

    return maintenanceLog;
  }

  // Update maintenance log
  async updateMaintenanceLog(logId, logData, files) {
    const log = await MaintenanceLog.findById(logId);

    if (!log) {
      throw new AppError("Maintenance log not found", 404);
    }

    // Add uploaded files
    if (files && files.images) {
      logData.images = [
        ...(log.images || []),
        ...files.images.map((file) => file.path),
      ];
    }

    if (files && files.invoice) {
      logData.invoiceDocument = files.invoice[0].path;
    }

    // Update fields
    Object.keys(logData).forEach((key) => {
      if (logData[key] !== undefined) {
        log[key] = logData[key];
      }
    });

    await log.save();

    return log;
  }

  // Complete maintenance
  async completeMaintenance(logId, completionData) {
    const log = await MaintenanceLog.findById(logId);

    if (!log) {
      throw new AppError("Maintenance log not found", 404);
    }

    if (log.status === "completed") {
      throw new AppError("Maintenance already completed", 400);
    }

    log.status = "completed";
    log.completionDate = new Date();

    if (completionData.diagnosis) log.diagnosis = completionData.diagnosis;
    if (completionData.performedBy)
      log.performedBy = completionData.performedBy;
    if (completionData.notes) log.notes = completionData.notes;

    await log.save();

    // Update truck status back to active
    const truck = await Truck.findById(log.truckId);
    if (truck && truck.status === "maintenance") {
      truck.status = "active";
      await truck.save();
    }

    return log;
  }

  // Delete maintenance log
  async deleteMaintenanceLog(logId) {
    const log = await MaintenanceLog.findById(logId);

    if (!log) {
      throw new AppError("Maintenance log not found", 404);
    }

    // Only allow deletion if not completed
    if (log.status === "completed") {
      throw new AppError("Cannot delete completed maintenance log", 400);
    }

    await log.deleteOne();

    return { message: "Maintenance log deleted successfully" };
  }

  // Get maintenance statistics
  async getMaintenanceStats(filters = {}) {
    const query = {};

    if (filters.truckId) {
      query.truckId = filters.truckId;
    }

    if (filters.startDate && filters.endDate) {
      query.startDate = {
        $gte: new Date(filters.startDate),
        $lte: new Date(filters.endDate),
      };
    }

    const stats = await MaintenanceLog.aggregate([
      { $match: query },
      {
        $group: {
          _id: null,
          totalLogs: { $sum: 1 },
          totalCost: { $sum: "$totalCost" },
          avgCost: { $avg: "$totalCost" },
          scheduled: {
            $sum: { $cond: [{ $eq: ["$status", "scheduled"] }, 1, 0] },
          },
          inProgress: {
            $sum: { $cond: [{ $eq: ["$status", "in-progress"] }, 1, 0] },
          },
          completed: {
            $sum: { $cond: [{ $eq: ["$status", "completed"] }, 1, 0] },
          },
          regular: {
            $sum: { $cond: [{ $eq: ["$maintenanceType", "regular"] }, 1, 0] },
          },
          emergency: {
            $sum: { $cond: [{ $eq: ["$maintenanceType", "emergency"] }, 1, 0] },
          },
          preventive: {
            $sum: {
              $cond: [{ $eq: ["$maintenanceType", "preventive"] }, 1, 0],
            },
          },
          breakdown: {
            $sum: { $cond: [{ $eq: ["$maintenanceType", "breakdown"] }, 1, 0] },
          },
        },
      },
    ]);

    return (
      stats[0] || {
        totalLogs: 0,
        totalCost: 0,
        avgCost: 0,
        scheduled: 0,
        inProgress: 0,
        completed: 0,
        regular: 0,
        emergency: 0,
        preventive: 0,
        breakdown: 0,
      }
    );
  }

  // Get maintenance due alerts
  async getMaintenanceDueAlerts(days = 30) {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);

    const dueLogs = await MaintenanceLog.find({
      nextMaintenanceDue: { $lte: futureDate, $gte: new Date() },
      status: "completed",
    })
      .populate("truckId", "truckNumber modelName")
      .sort({ nextMaintenanceDue: 1 });

    return dueLogs;
  }

  // Predictive maintenance analysis
  async predictiveMaintenance(truckId) {
    const truck = await Truck.findById(truckId);
    if (!truck) {
      throw new AppError("Truck not found", 404);
    }

    // Get maintenance history
    const history = await MaintenanceLog.find({
      truckId,
      status: "completed",
    }).sort({ completionDate: -1 });

    if (history.length < 3) {
      return {
        hasSufficientData: false,
        message: "Insufficient maintenance history for prediction",
      };
    }

    const predictions = [];

    // Analyze frequency of issues by category
    const categoryFrequency = {};
    history.forEach((log) => {
      categoryFrequency[log.category] =
        (categoryFrequency[log.category] || 0) + 1;
    });

    // Calculate average time between maintenance
    const avgDaysBetween = {};
    for (let i = 0; i < history.length - 1; i++) {
      const category = history[i].category;
      const daysDiff = Math.floor(
        (history[i].completionDate - history[i + 1].completionDate) /
          (1000 * 60 * 60 * 24)
      );

      if (!avgDaysBetween[category]) {
        avgDaysBetween[category] = { total: 0, count: 0 };
      }
      avgDaysBetween[category].total += daysDiff;
      avgDaysBetween[category].count += 1;
    }

    // Generate predictions
    for (const category in categoryFrequency) {
      if (categoryFrequency[category] >= 2) {
        const lastMaintenance = history.find(
          (log) => log.category === category
        );
        const avgDays = avgDaysBetween[category]
          ? avgDaysBetween[category].total / avgDaysBetween[category].count
          : 90;

        const daysSinceLastMaintenance = Math.floor(
          (Date.now() - lastMaintenance.completionDate) / (1000 * 60 * 60 * 24)
        );

        const predictedDate = new Date(
          lastMaintenance.completionDate.getTime() +
            avgDays * 24 * 60 * 60 * 1000
        );

        const urgencyScore = Math.min(
          100,
          (daysSinceLastMaintenance / avgDays) * 100
        );

        predictions.push({
          category,
          frequency: categoryFrequency[category],
          lastMaintenanceDate: lastMaintenance.completionDate,
          daysSinceLast: daysSinceLastMaintenance,
          avgDaysBetween: Math.round(avgDays),
          predictedNextDate: predictedDate,
          urgencyScore: Math.round(urgencyScore),
          priority:
            urgencyScore > 80 ? "high" : urgencyScore > 50 ? "medium" : "low",
        });
      }
    }

    return {
      hasSufficientData: true,
      truckId: truck._id,
      truckNumber: truck.truckNumber,
      predictions: predictions.sort((a, b) => b.urgencyScore - a.urgencyScore),
      generatedAt: new Date(),
    };
  }

  // Get maintenance trends
  async getMaintenanceTrends(days = 90) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const trends = await MaintenanceLog.aggregate([
      {
        $match: {
          startDate: { $gte: startDate },
        },
      },
      {
        $group: {
          _id: {
            date: { $dateToString: { format: "%Y-%m-%d", date: "$startDate" } },
            type: "$maintenanceType",
          },
          count: { $sum: 1 },
          totalCost: { $sum: "$totalCost" },
        },
      },
      { $sort: { "_id.date": 1 } },
    ]);

    return trends;
  }

  // Get cost breakdown by category
  async getCostBreakdown(filters = {}) {
    const query = {};

    if (filters.truckId) {
      query.truckId = filters.truckId;
    }

    if (filters.startDate && filters.endDate) {
      query.startDate = {
        $gte: new Date(filters.startDate),
        $lte: new Date(filters.endDate),
      };
    }

    const breakdown = await MaintenanceLog.aggregate([
      { $match: query },
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
          totalCost: { $sum: "$totalCost" },
          avgCost: { $avg: "$totalCost" },
          totalLaborCost: { $sum: "$laborCost" },
          totalPartsCost: { $sum: "$partsCost" },
        },
      },
      { $sort: { totalCost: -1 } },
    ]);

    return breakdown;
  }

  // Get truck maintenance history
  async getTruckMaintenanceHistory(truckId, limit = 10) {
    const history = await MaintenanceLog.find({ truckId })
      .populate("reportedBy", "name")
      .populate("approvedBy", "email")
      .sort({ startDate: -1 })
      .limit(limit);

    return history;
  }

  // Approve maintenance (for owner)
  async approveMaintenance(logId, ownerId, approvalData) {
    const log = await MaintenanceLog.findById(logId);

    if (!log) {
      throw new AppError("Maintenance log not found", 404);
    }

    log.approvedBy = ownerId;
    log.status = "in-progress";

    if (approvalData.estimatedCompletionDate) {
      log.estimatedCompletionDate = approvalData.estimatedCompletionDate;
    }

    if (approvalData.notes) {
      log.notes = approvalData.notes;
    }

    await log.save();

    return log;
  }
}

module.exports = new MaintenanceService();
