const User = require("../models/User");
let nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

const forgotPassword = async (req, res) => {
  const { email, isAdmin } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Find the user in the database by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const id = user._id; // Use the actual user ID from the database

    // Generate a JWT token with an expiration of 30 days
    const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // Create the transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zelalemt2525@gmail.com",
        pass: "mejycibszbqrxpin", // Use environment variables in production
      },
    });

    // Define mail options (where to send, subject, and content)
    if (isAdmin) {
      const mailOptions = {
        from: "zelalemt2525@gmail.com",
        to: email, // Send to user's email
        subject: "Reset your password",

        text: `Click here to reset your password: https://admin.enkoytechnologies.com/reset-password/${id}/${token}`,

      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.error(error);
          return res
            .status(500)
            .json({ message: "Error sending email", error });
        } else {
          console.log("Email sent: " + info.response);
          return res.status(200).json({ message: "Email sent successfully" });
        }
      });
    } else {
      const mailOptions = {
        from: "zelalemt2525@gmail.com",
        to: email, // Send to user's email
        subject: "Reset your password",

        text: `Click here to reset your password: https://enkoytechnologies.com/reset-password/${id}/${token}`,

      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.error(error);
          return res
            .status(500)
            .json({ message: "Error sending email", error });
        } else {
          console.log("Email sent: " + info.response);
          return res.status(200).json({ message: "Email sent successfully" });
        }
      });
    }

    // Send the email using the transporter
  } catch (error) {
    console.error("Error handling forgot password request:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const resetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ status: "error", message: "Invalid or expired token" });
    }

    // Check if user exists
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user password
    await User.findByIdAndUpdate(id, { password: hashedPassword });

    res
      .status(200)
      .json({ status: "success", message: "Password reset successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "error" });
  }
};

module.exports = {
  Register,
  Login,
  getUsers,
  getSingleUser,
  updateUser,
  forgotPassword,
  resetPassword,
};
