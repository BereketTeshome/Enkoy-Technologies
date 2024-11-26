const express = require("express");
const {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
  addBlogComment,
  deleteBlogComment,
  getSingleBlog,
} = require("../controllers/Blogs");

const router = express.Router();

// Create a new blog
router.post("/create", createBlog);

// Get all blogs
router.get("/get", getBlogs);

// Get blog by ID
router.get("/get/:id", getSingleBlog);

// Update a blog by ID
router.put("/edit/:id", updateBlog);

// Delete a blog by ID
router.delete("/delete/:id", deleteBlog);

// Add a blog comment by ID
router.post("/:id/comments", addBlogComment);

// Delete a blog comment by ID
router.delete("/:id/comments/:commentId", deleteBlogComment);

module.exports = router;
