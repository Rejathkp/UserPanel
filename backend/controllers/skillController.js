import Skill from "../models/skillModel.js";

// Get all skills
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills.map((skill) => skill.skill));
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Add a new skill
export const addSkill = async (req, res) => {
  const { skill } = req.body;

  try {
    const existingSkill = await Skill.findOne({ skill });
    if (existingSkill) {
      return res.status(400).json({ message: "Skill already exists" });
    }
    
    const newSkill = new Skill({ skill });
    await newSkill.save();

    res.status(201).json({ message: "Skill added successfully", skill });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete a skill
export const deleteSkill = async (req, res) => {
  const { skill } = req.params;

  try {
    const deletedSkill = await Skill.findOneAndDelete({ skill });

    if (!deletedSkill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    res.status(200).json({ message: "Skill deleted successfully", skill });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};