// routes/educationRoutes.js
import express from "express";
import {
  getAllEducation,
  addEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/eduController.js";

const eduRouter = express.Router();

// Get all education entries
eduRouter.get("/", getAllEducation);

// Add a new education entry
eduRouter.post("/", addEducation);

// Update an existing education entry
eduRouter.put("/:id", updateEducation);

// Delete an education entry
eduRouter.delete("/:id", deleteEducation);

export default eduRouter;