const express = require("express");
const {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
  getSingleJob,
} = require("../controllers/jobs");

const router = express.Router();

// Create a new Job
router.post("/create", createJob);

// Get all Jobs
router.get("/get", getJobs);

// Get Job by ID
router.get("/get/:id", getSingleJob);

// Update a Job by ID
router.put("/edit/:id", updateJob);

// Delete a Job by ID
router.delete("/delete/:id", deleteJob);

module.exports = router;
