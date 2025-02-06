








import mongoose from "mongoose";
import { User } from "./models/userInfo.js";
import { connectDB } from "./config/db.js"; // Import the database connection function

// Dummy user data
const dummyUser = {
  firstName: "Abhishek",
  lastName: "Shankar",
  dob: new Date("1999-10-18"),
  gender: "Male",
  mobile: "+91 9876543210",
  email: "abhishekshankar123@gmail.com",
  aadhar: "3333 2211 5544 0022",
  address: "Sweet Home",
  state: "Kerala",
  district: "Thiruvananthapuram",
  pincode: "695001",
};

// Seed the database
const seedDatabase = async () => {
  try {
    // Connect to the database using the imported connectDB function
    await connectDB();
    console.log("Connected to MongoDB");

    // Delete all existing users
    await User.deleteMany({});
    console.log("Deleted all existing users.");

    // Create a dummy user
    const user = await User.create(dummyUser);
    console.log("Dummy user created:", user);

    // Exit the process
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();