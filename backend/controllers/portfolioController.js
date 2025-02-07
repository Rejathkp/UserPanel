import Portfolio from "../models/portfolioModel.js";

// Get all portfolio links
export const getPortfolioLinks = async (req, res) => {
  try {
    const links = await Portfolio.find();
    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Add a new portfolio link
export const addPortfolioLink = async (req, res) => {
  const { title, url } = req.body;

  try {
    const existingLink = await Portfolio.findOne({ title });
    if (existingLink) {
      return res.status(400).json({ message: "Portfolio link already exists" });
    }

    const newLink = new Portfolio({ title, url });
    await newLink.save();

    res.status(201).json({ message: "Portfolio link added successfully", link: newLink });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete a portfolio link
export const deletePortfolioLink = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedLink = await Portfolio.findByIdAndDelete(id);

    if (!deletedLink) {
      return res.status(404).json({ message: "Portfolio link not found" });
    }

    res.status(200).json({ message: "Portfolio link deleted successfully", link: deletedLink });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};