const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema(
  {
    video: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Portfolio", PortfolioSchema);
