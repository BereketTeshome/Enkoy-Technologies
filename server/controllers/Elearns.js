const Elearn = require("../models/Elearn");

const createElearn = async (req, res) => {
  try {
    const elearn = await Elearn.create(req.body);
    res.status(201).json({ elearn });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getElearns = async (req, res) => {
  try {
    const elearns = await Elearn.find({});
    res.status(200).json({ count: elearns.length, elearns });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateElearn = async (req, res) => {
  const { id } = req.params;
  try {
    const elearn = await Elearn.findByIdAndUpdate(id, req.body, { new: true });

    if (!elearn) {
      return res.status(404).json({ message: "Elearn not found" });
    }

    res.status(200).json({ elearn });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteElearn = async (req, res) => {
  const { id } = req.params;
  try {
    const elearn = await Elearn.findByIdAndDelete(id);

    if (!elearn) {
      return res.status(404).json({ message: "Elearn not found" });
    }

    res.status(200).json({ message: "Elearn deleted successfully", elearn });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createElearn,
  getElearns,
  updateElearn,
  deleteElearn,
};
