const mongoose = require("mongoose");

const ElearnSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ElearnSchema.index({
  title: "text",
  description: "text",
});

module.exports = mongoose.model("Elearn", ElearnSchema);
