import Career from "../models/careerModel.js";

export const getCareerObjective = async (req, res) => {
  try {
    const career = await Career.findOne(); 
    if (!career) {
      return res.status(404).json({ message: "Career objective not found" });
    }
    res.status(200).json(career);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const addOrUpdateCareerObjective = async (req, res) => {
  const { objective } = req.body;

  try {
    let career = await Career.findOne(); 

    if (!career) {
      career = new Career({ objective });
      await career.save();
      return res.status(201).json({ message: "Career objective added successfully", career });
    }

    career.objective = objective;
    await career.save();

    res.status(200).json({ message: "Career objective updated successfully", career });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};