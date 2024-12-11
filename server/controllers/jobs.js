const Jobs = require("../models/Jobs");

const createJob = async (req, res) => {
  try {
    const job = await Jobs.create(req.body);
    res.status(201).json({ job });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find({});
    res.status(200).json({ count: jobs.length, jobs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingleJob = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Jobs.findById(id);
    res.status(200).json({ count: job.length, job });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateJob = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Jobs.findByIdAndUpdate(id, req.body, { new: true });

    if (!job) {
      return res.status(404).json({ message: "job not found" });
    }

    res.status(200).json({ job });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Jobs.findByIdAndDelete(id);

    if (!job) {
      return res.status(404).json({ message: "job not found" });
    }

    res.status(200).json({ message: "job deleted successfully", job });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createJob,
  getJobs,
  getSingleJob,
  updateJob,
  deleteJob,
};
