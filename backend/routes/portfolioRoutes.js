import express from "express";
import { getPortfolioLinks, addPortfolioLink, deletePortfolioLink } from "../controllers/portfolioController.js";

const portfolioRouter = express.Router();

portfolioRouter.get("/", getPortfolioLinks);
portfolioRouter.post("/", addPortfolioLink);
portfolioRouter.delete("/:id", deletePortfolioLink);

export default portfolioRouter;