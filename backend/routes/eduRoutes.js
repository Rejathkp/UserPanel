// routes/educationRoutes.js
import express from "express";
import {
  getAllEducation,
  addEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/eduController.js";

const eduRouter = express.Router();

eduRouter.get("/", getAllEducation);
eduRouter.post("/", addEducation);
eduRouter.put("/:id", updateEducation);
eduRouter.delete("/:id", deleteEducation);

export default eduRouter;