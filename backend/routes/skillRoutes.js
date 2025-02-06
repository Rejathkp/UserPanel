import express from "express";
import { getSkills, addSkill, deleteSkill } from "../controllers/skillController.js";

const skillRouter = express.Router();

// GET /api/skills - Fetch all skills
skillRouter.get("/", getSkills);

// POST /api/skills - Add a new skill
skillRouter.post("/", addSkill);

// DELETE /api/skills/:skill - Delete a skill
skillRouter.delete("/:skill", deleteSkill);

export default skillRouter;