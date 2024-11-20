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
    const ebooks = await Ebook.find({});
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

module.exports = {
  createEbook,
  getEbooks,
  updateEbook,
  deleteEbook,
};
