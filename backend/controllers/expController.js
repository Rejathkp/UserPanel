import Experience from "../models/expModel.js";

// Get all experiences
export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Add a new experience
export const addExperience = async (req, res) => {
  const { role, company, duration, projects } = req.body;

  try {
    const newExperience = new Experience({ role, company, duration, projects });
    await newExperience.save();
    res.status(201).json({ message: "Experience added successfully", experience: newExperience });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update an existing experience
export const updateExperience = async (req, res) => {
  const { id } = req.params;
  const { role, company, duration, projects } = req.body;

  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      id,
      { role, company, duration, projects },
      { new: true }
    );

    if (!updatedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.status(200).json({ message: "Experience updated successfully", experience: updatedExperience });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete an experience
export const deleteExperience = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedExperience = await Experience.findByIdAndDelete(id);

    if (!deletedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.status(200).json({ message: "Experience deleted successfully", experience: deletedExperience });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};