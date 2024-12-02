const User = require("../models/User");

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ email: "You must include an email." });
    }
    if (!password) {
      return res.status(400).json({ password: "You must include a password." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ email: "Email not found." }); // Use 404 for "not found"
    }

    const comparePassword = await user.compare(password);
    if (!comparePassword) {
      return res.status(401).json({ password: "Incorrect password." }); // Use 401 for "unauthorized"
    }

    const token = await user.createToken();
    return res.status(200).json({ user, token });
  } catch (error) {
    console.error("Server error:", error.message);
    return res
      .status(500)
      .json({ error: "Something went wrong. Please try again." });
  }
};

const Register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = await user.createToken();
    res.status(201).json({ user, token });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(500).json({ email: "email already used" });
    }
    return res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({ users });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.findById(id);
    res.status(201).json({ users });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updates = req.body; // Add additional filtering if necessary

    const user = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true, // Ensure validation is applied
    });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const token = await user.createToken();

    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { Register, Login, getUsers, getSingleUser, updateUser };
