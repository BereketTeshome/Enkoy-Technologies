require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/Connect");
const authRouter = require("./routes/auth");
const blogRouter = require("./routes/blogs");
const ebookRouter = require("./routes/ebooks");
const elearnRouter = require("./routes/elearnings");
const jobRouter = require("./routes/jobs");
const portfolioRouter = require("./routes/portfolio");
const chatbot = require("./routes/chatbot");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
require("./auth");
const cookieParser = require("cookie-parser");

// Middleware setup
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(express.json());
app.use(cors())

app.use(fileUpload());

// Utility for checking login
const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/failure" }),
  (req, res) => {
    try {
      if (req.user) {
        res.cookie("user", req.user.token, {
          httpOnly: false,
          secure: false, // Use HTTPS in production
          maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
        });
        console.log("Token set in cookie:", req.user.token);
      } else {
        console.error("Token not available in user object.");
      }
      res.redirect("https://enkoytechnologies.com");
    } catch (err) {
      console.error("Error in Google callback route:", err);
      res.status(500).send("Internal Server Error", err);
    }
  }
);


app.get("/protected", isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.username || "User"}!`);
});

app.get("/auth/failure", (req, res) => {
  res.send("Something went wrong...");
});

app.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("Goodbye :(");
});

module.exports = app;


// Directory setup
const UPLOAD_DIR = path.join(__dirname, "uploads");
const PDF_UPLOAD_DIR = path.join(UPLOAD_DIR, "pdfs");
const IMAGE_UPLOAD_DIR = path.join(UPLOAD_DIR, "images");
const VIDEO_UPLOAD_DIR = path.join(UPLOAD_DIR, "videos");

// Serve the uploads directory as static
app.use("/uploads", express.static(UPLOAD_DIR));

// Ensure directories exist
[PDF_UPLOAD_DIR, IMAGE_UPLOAD_DIR, VIDEO_UPLOAD_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Routes
app.use("/api/user", authRouter);
app.use("/api/blog", blogRouter);
app.use("/api/ebook", ebookRouter);
app.use("/api/job", jobRouter);
app.use("/api/portfolio", portfolioRouter);
app.use("/api/elearn", elearnRouter);
app.use("/api/bot", chatbot);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Image upload endpoint
app.post("/upload/image", (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).send("No file was uploaded.");
  }

  const file = req.files.file;

  // Validate file type
  if (!file.mimetype.startsWith("image/")) {
    return res.status(400).send("Only image files are allowed.");
  }

  const fileExtension = path.extname(file.name).toLowerCase();
  const uniqueFileName = `${uuidv4()}${fileExtension}`;
  const uploadPath = path.join(IMAGE_UPLOAD_DIR, uniqueFileName);

  // Save the file
  file.mv(uploadPath, (err) => {
    if (err) {
      console.error("Error saving image:", err);
      return res.status(500).send("Image upload failed.");
    }

    const fileUrl = `${req.protocol}://${req.get(
      "host"
    )}/uploads/images/${uniqueFileName}`;
    res.send({
      message: "Image uploaded successfully!",
      fileUrl,
    });
  });
});

// PDF upload endpoint
app.post("/upload/pdf", (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).send("No file was uploaded.");
  }

  const file = req.files.file;

  // Validate file type
  if (file.mimetype !== "application/pdf") {
    return res.status(400).send("Only PDF files are allowed.");
  }

  const fileExtension = path.extname(file.name).toLowerCase();
  const uniqueFileName = `${uuidv4()}${fileExtension}`;
  const uploadPath = path.join(PDF_UPLOAD_DIR, uniqueFileName);

  // Save the file
  file.mv(uploadPath, (err) => {
    if (err) {
      console.error("Error saving PDF:", err);
      return res.status(500).send("PDF upload failed.");
    }

    const fileUrl = `${req.protocol}://${req.get(
      "host"
    )}/uploads/pdfs/${uniqueFileName}`;
    res.send({
      message: "PDF uploaded successfully!",
      fileUrl,
    });
  });
});

// Video upload endpoint
app.post("/upload/video", (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).send("No file was uploaded.");
  }

  const file = req.files.file;

  // Validate file type
  if (!file.mimetype.startsWith("video/")) {
    return res.status(400).send("Only video files are allowed.");
  }

  const fileExtension = path.extname(file.name).toLowerCase();
  const uniqueFileName = `${uuidv4()}${fileExtension}`;
  const uploadPath = path.join(VIDEO_UPLOAD_DIR, uniqueFileName);

  // Save the file
  file.mv(uploadPath, (err) => {
    if (err) {
      console.error("Error saving video:", err);
      return res.status(500).send("Video upload failed.");
    }

    const fileUrl = `${req.protocol}://${req.get(
      "host"
    )}/uploads/videos/${uniqueFileName}`;
    res.send({
      message: "Video uploaded successfully!",
      fileUrl,
    });
  });
});
// Start server
const start = async () => {
  const port = 3000;
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

start();
