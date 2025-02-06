import mongoose from "mongoose";

const PreferenceSchema = new mongoose.Schema({
  preference: {
    type: String,
    required: true,
  },
}); 

export default mongoose.model("Preference", PreferenceSchema);