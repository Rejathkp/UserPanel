

import { User } from "../models/userInfo.js";

// Fetch the dummy user
export const getUser = async (req, res) => {
  try {
    const user = await User.findOne(); 
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update the dummy user
export const updateUser = async (req, res) => {
  try {
    const updatedData = req.body;
    const user = await User.findOneAndUpdate({}, updatedData, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};