import mongoose from "mongoose";
import dotenv from "dotenv"; // Import dotenv

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
  try {
    // Use the MONGO_URI environment variable
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};