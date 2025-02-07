import express from "express";
import {
  getExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
} from "../controllers/expController.js";

const expRouter = express.Router();

expRouter.get("/", getExperiences);
expRouter.post("/", addExperience);
expRouter.put("/:id", updateExperience);
expRouter.delete("/:id", deleteExperience);

export default expRouter;