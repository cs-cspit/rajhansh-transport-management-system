// server/middleware/validation.js
const { AppError } = require("./errorHandler");

const validateTruckData = (req, res, next) => {
  const {
    truckNumber,
    modelName,
    capacity,
    pucNumber,
    permitAllIndiaNumber,
    permitGujaratNumber,
    insuranceNumber,
    fitnessNumber,
    rcNumber,
  } = req.body;

  const errors = [];

  if (!truckNumber || truckNumber.trim() === "") {
    errors.push("Truck number is required");
  }

  if (!modelName || modelName.trim() === "") {
    errors.push("Model name is required");
  }

  if (!capacity || isNaN(capacity) || capacity <= 0) {
    errors.push("Valid capacity is required");
  }

  if (errors.length > 0) {
    return next(new AppError(errors.join(", "), 400));
  }

  next();
};

const validateDriverData = (req, res, next) => {
  const { name, phone, licenseNumber, experienceYears } = req.body;

  const errors = [];

  if (!name || name.trim() === "") {
    errors.push("Driver name is required");
  }

  if (!phone || !/^\d{10}$/.test(phone)) {
    errors.push("Valid 10-digit contact number is required");
  }

  if (!licenseNumber || licenseNumber.trim() === "") {
    errors.push("License number is required");
  }

  if (experienceYears && (isNaN(experienceYears) || experienceYears < 0)) {
    errors.push("Valid experience years required");
  }

  if (errors.length > 0) {
    return next(new AppError(errors.join(", "), 400));
  }

  next();
};

const validateTripData = (req, res, next) => {
  const { truckId, driverId, source, destination, distance } = req.body;

  const errors = [];

  if (!truckId || truckId.trim() === "") {
    errors.push("Truck ID is required");
  }

  if (!driverId || driverId.trim() === "") {
    errors.push("Driver ID is required");
  }

  if (!source || source.trim() === "") {
    errors.push("Source location is required");
  }

  if (!destination || destination.trim() === "") {
    errors.push("Destination location is required");
  }

  if (distance && (isNaN(distance) || distance <= 0)) {
    errors.push("Valid distance is required");
  }

  if (errors.length > 0) {
    return next(new AppError(errors.join(", "), 400));
  }

  next();
};

module.exports = {
  validateTruckData,
  validateDriverData,
  validateTripData,
};
