// server/middleware/auth.js
const jwt = require("jsonwebtoken");
const Owner = require("../models/Owner");
const Driver = require("../models/Driver");
const { AppError } = require("./errorHandler");

// Unified authentication middleware
const authenticate = (role) => async (req, res, next) => {
  try {
    let token;

    // Extract token from header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(
        new AppError("You are not logged in. Please log in to access.", 401)
      );
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check role and fetch user
    let user;
    if (role === "owner") {
      user = await Owner.findById(decoded.id).select("-password");
      if (!user) {
        return next(new AppError("Owner not found.", 404));
      }
    } else if (role === "driver") {
      user = await Driver.findById(decoded.id).select("-password");
      if (!user) {
        return next(new AppError("Driver not found.", 404));
      }
    } else {
      // For routes accessible by both
      user =
        (await Owner.findById(decoded.id).select("-password")) ||
        (await Driver.findById(decoded.id).select("-password"));
      if (!user) {
        return next(new AppError("User not found.", 404));
      }
    }

    req.user = user;
    req.userRole = role || (user.companyName ? "owner" : "driver");
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authenticateOwner: authenticate("owner"),
  authenticateDriver: authenticate("driver"),
  authenticateAny: authenticate(null),
};
