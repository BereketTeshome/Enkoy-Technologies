const Ebook = require("../models/Ebook");

const createEbook = async (req, res) => {
  try {
    const ebook = await Ebook.create(req.body);
    res.status(201).json({ ebook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEbooks = async (req, res) => {
  try {
    const ebooks = await Ebook.find({}).populate("author", "-password");
    res.status(200).json({ count: ebooks.length, ebooks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingleEbook = async (req, res) => {
  const { id } = req.params;
  try {
    const ebooks = await Ebook.findById(id).populate("author", "-password");
    res.status(200).json({ count: ebooks.length, ebooks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateEbook = async (req, res) => {
  const { id } = req.params;
  try {
    const ebook = await Ebook.findByIdAndUpdate(id, req.body, { new: true });

    if (!ebook) {
      return res.status(404).json({ message: "Ebook not found" });
    }

    res.status(200).json({ ebook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEbook = async (req, res) => {
  const { id } = req.params;
  try {
    const ebook = await Ebook.findByIdAndDelete(id);

    if (!ebook) {
      return res.status(404).json({ message: "Ebook not found" });
    }

    res.status(200).json({ message: "Ebook deleted successfully", ebook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addEbookComment = async (req, res) => {
  const { id } = req.params;
  const { username, text, userId, rating } = req.body;

  try {
    const post = await Ebook.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.comments.push({
      username,
      text,
      createdAt: new Date(),
      userId,
      rating,
    });

    await post.save();
    res.status(201).json({ message: "Comment added successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Error creating comment", error });
  }
};

const deleteEbookComment = async (req, res) => {
  const { id, commentId } = req.params;

  try {
    // Find the post by ID
    const post = await Ebook.findById(id);

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
  createEbook,
  getEbooks,
  updateEbook,
  deleteEbook,
  getSingleEbook,
  deleteEbookComment,
  addEbookComment,
};
