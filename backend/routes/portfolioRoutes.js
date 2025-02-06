import express from "express";
import { getPortfolioLinks, addPortfolioLink, deletePortfolioLink } from "../controllers/portfolioController.js";

const portfolioRouter = express.Router();

// GET /api/portfolio - Fetch all portfolio links
portfolioRouter.get("/", getPortfolioLinks);

// POST /api/portfolio - Add a new portfolio link
portfolioRouter.post("/", addPortfolioLink);

// DELETE /api/portfolio/:id - Delete a portfolio link
portfolioRouter.delete("/:id", deletePortfolioLink);

export default portfolioRouter;