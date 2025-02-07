import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import eduRouter from "./routes/eduRoutes.js";
import careerRouter from "./routes/careerRoutes.js";
import skillRouter from "./routes/skillRoutes.js";
import fileRouter from "./routes/fileRoutes.js";
import portfolioRouter from "./routes/portfolioRoutes.js";
import expRouter from "./routes/expRoutes.js";
import prefRouter from "./routes/prefRoutes.js";
// import path from "path";

// Load environment variables
dotenv.config();

// App configuration
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json()); 
app.use(cors()); 

// Database connection
connectDB();

// Routes
app.use("/api/users", userRouter);
app.use("/api/education", eduRouter);
app.use("/api/career", careerRouter);
app.use("/api/skills", skillRouter);
app.use('/api', fileRouter);
app.use("/api/portfolio", portfolioRouter);
app.use("/api/experiences", expRouter);
app.use("/api/preference", prefRouter);

// Default route
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});