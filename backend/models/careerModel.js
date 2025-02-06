import mongoose from "mongoose";

const CareerSchema = new mongoose.Schema({
  objective: {
    type: String,
    required: true,
  },
}); 

export default mongoose.model("Career", CareerSchema);