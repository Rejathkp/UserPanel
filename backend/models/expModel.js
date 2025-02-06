import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  projects: {
    type: [String],
    default: [],
  },
});

export default mongoose.model("Experience", ExperienceSchema);