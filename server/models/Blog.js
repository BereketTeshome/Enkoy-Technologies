const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
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
    category: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        userId: { type: mongoose.Schema.Types.ObjectId },
        username: { type: String },
        text: { type: String },
        profileImg: { type: String, default: "" },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
  }
);

BlogSchema.index({
  title: "text",
  description: "text",
});

module.exports = mongoose.model("Blog", BlogSchema);
