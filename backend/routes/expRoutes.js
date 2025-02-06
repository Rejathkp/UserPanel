import express from "express";
import {
  getExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
} from "../controllers/expController.js";

const expRouter = express.Router();

// GET /api/experiences - Fetch all experiences
expRouter.get("/", getExperiences);

// POST /api/experiences - Add a new experience
expRouter.post("/", addExperience);

// PUT /api/experiences/:id - Update an experience
expRouter.put("/:id", updateExperience);

// DELETE /api/experiences/:id - Delete an experience
expRouter.delete("/:id", deleteExperience);

export default expRouter;