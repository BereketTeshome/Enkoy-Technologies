const Portfolio = require("../models/Portfolio");

const createPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.create(req.body);
    res.status(201).json({ portfolio });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find({});
    res.status(200).json({ count: Portfolio.length, portfolio });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSinglePortfolio = async (req, res) => {
  const { id } = req.params;
  try {
    const portfolio = await Portfolio.findById(id);
    res.status(200).json({ count: portfolio.length, portfolio });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePortfolio = async (req, res) => {
  const { id } = req.params;
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!portfolio) {
      return res.status(404).json({ message: "portfolio not found" });
    }

    res.status(200).json({ portfolio });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePortfolio = async (req, res) => {
  const { id } = req.params;
  try {
    const portfolio = await Portfolio.findByIdAndDelete(id);

    if (!portfolio) {
      return res.status(404).json({ message: "portfolio not found" });
    }

    res
      .status(200)
      .json({ message: "portfolio deleted successfully", portfolio });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPortfolio,
  getPortfolio,
  getSinglePortfolio,
  updatePortfolio,
  deletePortfolio,
};
