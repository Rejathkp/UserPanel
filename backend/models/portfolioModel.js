import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Portfolio", PortfolioSchema);