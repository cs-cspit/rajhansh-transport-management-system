// server/controllers/authController.js
const authService = require("../services/authService.js");
const { AppError } = require("../middleware/errorHandler");

class AuthController {
  // Owner Registration
  async registerOwner(req, res, next) {
    try {
      const result = await authService.registerOwner(req.body);

      res.status(201).json({
        status: "success",
        message: "Owner registered successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // Owner Login
  async loginOwner(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new AppError("Please provide email and password", 400));
      }

      const result = await authService.loginOwner(email, password);

      res.status(200).json({
        status: "success",
        message: "Login successful",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // Driver Login
  async loginDriver(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new AppError("Please provide username and password", 400));
      }

      const result = await authService.loginDriver(email, password);

      res.status(200).json({
        status: "success",
        message: "Login successful",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get current user
  async getCurrentUser(req, res, next) {
    try {
      const user = await authService.getCurrentUser(req.user._id, req.userRole);

      res.status(200).json({
        status: "success",
        data: { user },
      });
    } catch (error) {
      next(error);
    }
  }

  // Change Password
  async changePassword(req, res, next) {
    try {
      const { currentPassword, newPassword, confirmPassword } = req.body;

      if (!currentPassword || !newPassword || !confirmPassword) {
        return next(new AppError("Please provide all password fields", 400));
      }

      if (newPassword !== confirmPassword) {
        return next(new AppError("New passwords do not match", 400));
      }

      if (newPassword.length < 6) {
        return next(
          new AppError("Password must be at least 6 characters", 400)
        );
      }

      const result = await authService.changePassword(
        req.user._id,
        req.userRole,
        currentPassword,
        newPassword
      );

      res.status(200).json({
        status: "success",
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  // Logout (client-side token removal)
  async logout(req, res, next) {
    try {
      res.status(200).json({
        status: "success",
        message: "Logged out successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
