const express = require("express");
const {
  createElearn,
  getElearns,
  updateElearn,
  deleteElearn,
} = require("../controllers/Elearns");

const router = express.Router();

// Create a new Elearn
router.post("/create", createElearn);

// Get all Elearns
router.get("/get", getElearns);

// Update an Elearn by ID
router.put("/edit/:id", updateElearn);

// Delete an Elearn by ID
router.delete("/delete/:id", deleteElearn);

module.exports = router;
