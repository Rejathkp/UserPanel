import express from "express";
import { getSkills, addSkill, deleteSkill } from "../controllers/skillController.js";

const skillRouter = express.Router();

skillRouter.get("/", getSkills);
skillRouter.post("/", addSkill);
skillRouter.delete("/:skill", deleteSkill);

export default skillRouter;