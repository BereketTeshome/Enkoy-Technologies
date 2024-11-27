const express = require("express");
const {
  createEbook,
  getEbooks,
  updateEbook,
  deleteEbook,
  getSingleEbook,
  addEbookComment,
  deleteEbookComment,
} = require("../controllers/Ebooks");

const router = express.Router();

// Create a new eBook
router.post("/create", createEbook);

// Get all eBooks
router.get("/get", getEbooks);

// Get eBook by ID
router.get("/get/:id", getSingleEbook);

// Update an eBook by ID
router.put("/edit/:id", updateEbook);

// Delete an eBook by ID
router.delete("/delete/:id", deleteEbook);

// Add a Ebook comment by ID
router.post("/:id/comments", addEbookComment);

// Delete a Ebook comment by ID
router.delete("/:id/comments/:commentId", deleteEbookComment);

module.exports = router;
