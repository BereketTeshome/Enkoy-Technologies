const express = require("express");
const {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} = require("../controllers/Blogs");

const router = express.Router();

// Create a new blog
router.post("/create", createBlog);

// Get all blogs
router.get("/get", getBlogs);

// Update a blog by ID
router.put("/edit/:id", updateBlog);

// Delete a blog by ID
router.delete("/delete/:id", deleteBlog);

module.exports = router;
