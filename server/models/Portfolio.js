const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    video: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Portfolio", PortfolioSchema);
