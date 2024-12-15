const express = require("express");
const {
  createPortfolio,
  getPortfolio,
  getSinglePortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolio");

const router = express.Router();

// Create a new Portfolio
router.post("/create", createPortfolio);

// Get all Portfolios
router.get("/get", getPortfolio);

// Get Portfolio by ID
router.get("/get/:id", getSinglePortfolio);

// Update a Portfolio by ID
router.put("/edit/:id", updatePortfolio);

// Delete a Portfolio by ID
router.delete("/delete/:id", deletePortfolio);

module.exports = router;
