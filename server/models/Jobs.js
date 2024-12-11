const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    jobTime: {
      type: String,
      required: true,
    },
    applyLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

JobSchema.index({
  title: "text",
  description: "text",
});

module.exports = mongoose.model("Jobs", JobSchema);
