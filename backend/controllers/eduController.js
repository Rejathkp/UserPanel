import Education from "../models/eduModel.js";

// Get all education entries
export const getAllEducation = async (req, res) => {
  try {
    const educationData = await Education.find();
    res.status(200).json(educationData);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Add a new education entry
export const addEducation = async (req, res) => {
  const { degree, institution, year } = req.body;
  try {
    const newEducation = new Education({ degree, institution, year });
    await newEducation.save();
    res.status(201).json({ message: "Education entry added successfully", newEducation });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Update an existing education entry
export const updateEducation = async (req, res) => {
  const { id } = req.params;
  const { degree, institution, year } = req.body;
  try {
    const updatedEducation = await Education.findByIdAndUpdate(
      id,
      { degree, institution, year },
      { new: true }
    );
    if (!updatedEducation) {
      return res.status(404).json({ message: "Education entry not found" });
    }
    res.status(200).json({ message: "Education entry updated successfully", updatedEducation });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Delete an education entry
export const deleteEducation = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEducation = await Education.findByIdAndDelete(id);
    if (!deletedEducation) {
      return res.status(404).json({ message: "Education entry not found" });
    }
    res.status(200).json({ message: "Education entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};