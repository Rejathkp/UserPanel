import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  skill: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Skill", SkillSchema);