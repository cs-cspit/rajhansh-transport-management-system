// server/seed.js
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Owner = require("./models/Owner");
const Driver = require("./models/Driver");
const Truck = require("./models/truck");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    await Owner.deleteMany();
    await Driver.deleteMany();
    await Truck.deleteMany();
    console.log("🗑️  Cleared existing data");

    // ✅ Create Owner - Note: Driver model hashes password automatically
    const hashedOwnerPassword = await bcrypt.hash("owner123", 10);
    const owner = await Owner.create({
      name: "Test Owner",
      email: "owner@test.com",
      password: hashedOwnerPassword,
      companyName: "Test Transport Company",
      contactNumber: "9876543210",
    });
    console.log("✅ Owner created:", owner.email);

    // ✅ Create Trucks
    const truck1 = await Truck.create({
      truckNumber: "GJ01AB1234",
      modelName: "Tata 4018",
      capacity: 18000,
      status: "active",
      pucNumber: "PUC123456",
      permitAllIndiaNumber: "AI123456",
      permitGujaratNumber: "GJ123456",
      insuranceNumber: "INS123456",
      fitnessNumber: "FIT123456",
      rcNumber: "RC123456",
      pucExpiryDate: new Date("2025-12-31"),
      permitAllIndiaExpiryDate: new Date("2026-06-30"),
      permitGujaratExpiryDate: new Date("2026-06-30"),
      insuranceExpiryDate: new Date("2026-03-31"),
      fitnessExpiryDate: new Date("2026-12-31"),
      rcExpiryDate: new Date("2030-12-31"),
    });
    console.log("✅ Truck created:", truck1.truckNumber);

    const truck2 = await Truck.create({
      truckNumber: "GJ01Z1806",
      modelName: "Ashok Leyland 2518",
      capacity: 25000,
      status: "active",
    });
    console.log("✅ Truck created:", truck2.truckNumber);

    // ✅ Create Driver 1 - Assigned to truck1
    // DON'T hash password here - the pre-save hook will do it
    const driver1 = await Driver.create({
      name: "Ramesh Kumar",
      phone: "9998887777", // ✅ Your schema uses 'phone', not 'contactNumber'
      email: "ramesh@test.com",
      password: "driver123", // ✅ Plain password - will be hashed by pre-save hook
      licenseNumber: "DL-1234567890",
      assignedTruck: truck1._id,
      experienceYears: 10,
      address: "Ahmedabad, Gujarat",
      status: "active",
    });
    console.log("✅ Driver created:", driver1.email);

    // Update truck1 to link back to driver1
    truck1.assignedDriver = driver1._id;
    await truck1.save();

    // ✅ Create Driver 2 - Not assigned
    const driver2 = await Driver.create({
      name: "John Doe",
      phone: "8887776666",
      email: "john@test.com",
      password: "driver456", // Plain password
      licenseNumber: "DL-0987654321",
      assignedTruck: null,
      experienceYears: 5,
      address: "Surat, Gujarat",
      status: "active",
    });
    console.log("✅ Driver created:", driver2.email);

    await mongoose.disconnect();
    console.log("\n🌱 Database seeded successfully!");
    console.log("\n📝 Test Credentials:");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("Owner Login:");
    console.log("  Email: owner@test.com");
    console.log("  Password: owner123");
    console.log("\nDriver 1 Login (Assigned to GJ01AB1234):");
    console.log("  Email: ramesh@test.com");
    console.log("  Password: driver123");
    console.log("\nDriver 2 Login (Available):");
    console.log("  Email: john@test.com");
    console.log("  Password: driver456");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding:", err);
    process.exit(1);
  }
}

seed();

// // seed.js
// require("dotenv").config();
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const Owner = require("./models/Owner");
// const Driver = require("./models/Driver");
// const Truck = require("./models/truck");

// async function seed() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ Connected to MongoDB");

//     // Clear existing data (optional)
//     await Owner.deleteMany();
//     await Driver.deleteMany();
//     await Truck.deleteMany();

//     // Create Owner
//     const hashedPassword = await bcrypt.hash("owner123", 10);
//     const owner = await Owner.create({
//       name: "Test Owner",
//       email: "owner@test.com",
//       password: hashedPassword,
//     });
//     console.log("✅ Owner created:", owner.email);

//     // Create Truck
//     const truck = await Truck.create({
//       truckNumber: "GJ01AB1234",
//       model: "Tata 4018",
//       yearOfManufacture: "2022",
//       vehicleType: "Heavy",
//       ownerName: owner.name,
//     });
//     console.log("✅ Truck created:", truck.truckNumber);

//     // Create Driver
//     const driver = await Driver.create({
//       name: "John Doe",
//       phone: "9998887777",
//       email: "driver@test.com",
//       password: "driver123",
//       licenseNumber: "DL123456",
//       assignedTruck: truck._id,
//       experienceYears: 5,
//       address: "Ahmedabad, Gujarat",
//     });
//     console.log("✅ Driver created:", driver.email);

//     await mongoose.disconnect();
//     console.log("🌱 Database seeded successfully!");
//   } catch (err) {
//     console.error("❌ Error seeding:", err);
//   }
// }

// seed();
