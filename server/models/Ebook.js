const mongoose = require("mongoose");

const EbookSchema = new mongoose.Schema(
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

EbookSchema.index({
  title: "text",
  description: "text",
});

module.exports = mongoose.model("Ebook", EbookSchema);
