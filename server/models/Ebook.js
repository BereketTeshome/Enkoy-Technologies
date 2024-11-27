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
    author: {
      type: String,
      required: true,
    },
    comments: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        userId: { type: mongoose.Schema.Types.ObjectId },
        username: { type: String },
        text: { type: String },
        rating: { type: Number },
        createdAt: { type: Date, default: Date.now },
      },
    ],
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
