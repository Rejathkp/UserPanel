import express from "express";
import { getPreference, addOrUpdatePreference } from "../controllers/prefController.js";

const prefRouter = express.Router();

prefRouter.get("/", getPreference);
prefRouter.post("/", addOrUpdatePreference);

export default prefRouter;