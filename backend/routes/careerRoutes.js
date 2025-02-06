import express from "express";
import { getCareerObjective, addOrUpdateCareerObjective } from "../controllers/careerController.js";

const careerRouter = express.Router();

careerRouter.get("/", getCareerObjective);
careerRouter.post("/", addOrUpdateCareerObjective);

export default careerRouter;