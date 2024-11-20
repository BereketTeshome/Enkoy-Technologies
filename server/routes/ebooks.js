const express = require("express");
const {
  createEbook,
  getEbooks,
  updateEbook,
  deleteEbook,
} = require("../controllers/Ebooks");

const router = express.Router();

// Create a new eBook
router.post("/create", createEbook);

// Get all eBooks
router.get("/get", getEbooks);

// Update an eBook by ID
router.put("/edit/:id", updateEbook);

// Delete an eBook by ID
router.delete("/delete/:id", deleteEbook);

module.exports = router;
