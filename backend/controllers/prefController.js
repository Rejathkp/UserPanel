import Preference from "../models/prefModel.js";

export const getPreference = async (req, res) => {
  try {
    const preference = await Preference.findOne(); 
    if (!preference) {
      return res.status(404).json({ message: "Preference not found" });
    }
    res.status(200).json(preference);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Add or update preference
export const addOrUpdatePreference = async (req, res) => {
    const { preference } = req.body; // Extract preference text from request body
    try {
      let pref = await Preference.findOne(); // Check if a preference already exists
      if (!pref) {
        // If no preference exists, create a new one
        pref = new Preference({ preference });
        await pref.save();
        return res.status(201).json({ message: "Preference added successfully", preference: pref.preference });
      }
      // If a preference exists, update it
      pref.preference = preference;
      await pref.save();
      res.status(200).json({ message: "Preference updated successfully", preference: pref.preference });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };