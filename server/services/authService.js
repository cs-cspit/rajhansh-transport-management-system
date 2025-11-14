// server/services/authService.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Owner = require('../models/Owner');
const Driver = require('../models/Driver');
const { AppError } = require('../middleware/errorHandler');

class AuthService {
  // Generate JWT token
  generateToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '30d',
    });
  }

  // Owner Registration
  async registerOwner(userData) {
    const { name, email, password, companyName, contactNumber } = userData;

    // Check if owner exists
    const existingOwner = await Owner.findOne({ email });
    if (existingOwner) {
      throw new AppError('Email already registered', 400);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create owner
    const owner = await Owner.create({
      name,
      email,
      password: hashedPassword,
      companyName,
      contactNumber,
    });

    const token = this.generateToken(owner._id);

    return {
      owner: {
        id: owner._id,
        email: owner.email,
        companyName: owner.companyName,
        contactNumber: owner.contactNumber,
        name: owner.name
      },
      token,
    };
  }

  // Owner Login
  async loginOwner(email, password) {
    // Find owner with password
    const owner = await Owner.findOne({ email }).select('+password');
    
    if (!owner) {
      throw new AppError('Invalid email or password', 401);
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, owner.password);
    if (!isPasswordValid) {
      throw new AppError('Invalid email or password', 401);
    }

    const token = this.generateToken(owner._id);

    return {
      owner: {
        id: owner._id,
        email: owner.email,
        companyName: owner.companyName,
        contactNumber: owner.contactNumber,
      },
      token,
    };
  }

  // Driver Login
  async loginDriver(email, password) {
    // Find driver with password
    const driver = await Driver.findOne({ email }).select('+password');
    
    console.log(driver);
    

    if (!driver) {
      throw new AppError('Invalid email or password', 401);
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, driver.password);
    console.log(isPasswordValid);
    
    if (!isPasswordValid) {
      throw new AppError('Invalid username or password', 401);
    }

    const token = this.generateToken(driver._id);

    return {
      driver: {
        id: driver._id,
        name: driver.name,
        email: driver.email,
        phone: driver.phone,
        contactNumber: driver.contactNumber,
        licenseNumber: driver.licenseNumber,
        assignedTruck: driver.assignedTruck,
      },
      token,
    };
  }

  // Get current user (Owner or Driver)
  async getCurrentUser(userId, role) {
    let user;
    
    if (role === 'owner') {
      user = await Owner.findById(userId).select('-password');
      if (!user) {
        throw new AppError('Owner not found', 404);
      }
    } else if (role === 'driver') {
      user = await Driver.findById(userId)
        .select('-password')
        .populate('assignedTruck', 'truckNumber modelName');
      if (!user) {
        throw new AppError('Driver not found', 404);
      }
    }

    return user;
  }

  // Change Password
  async changePassword(userId, role, currentPassword, newPassword) {
    const Model = role === 'owner' ? Owner : Driver;
    const user = await Model.findById(userId).select('+password');

    if (!user) {
      throw new AppError('User not found', 404);
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      throw new AppError('Current password is incorrect', 401);
    }

    // Hash new password
    user.password = await bcrypt.hash(newPassword, 12);
    await user.save();

    return { message: 'Password changed successfully' };
  }
}

module.exports = new AuthService();
