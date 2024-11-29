const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({ blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).populate("author", "-password");
    res.status(200).json({ count: blogs.length, blogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingleBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blogs = await Blog.findById(id).populate("author", "-password");
    res.status(200).json({ count: blogs.length, blogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully", blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addBlogComment = async (req, res) => {
  const { id } = req.params;
  const { username, text, userId } = req.body;

  try {
    const post = await Blog.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.comments.push({ username, text, createdAt: new Date(), userId });

    await post.save();
    res.status(201).json({ message: "Comment added successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Error creating comment", error });
  }
};

// delete a comment
const deleteBlogComment = async (req, res) => {
  const { id, commentId } = req.params;

  try {
    // Find the post by ID
    const post = await Blog.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Find and remove the comment by ID
    const commentIndex = post.comments.findIndex(
      (comment) => comment._id.toString() === commentId
    );

    if (commentIndex === -1) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Remove the comment
    post.comments.splice(commentIndex, 1);
    await post.save();

    res.status(200).json({ message: "Comment deleted successfully", post });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ message: "Error deleting comment", error });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  addBlogComment,
  deleteBlogComment,
};
