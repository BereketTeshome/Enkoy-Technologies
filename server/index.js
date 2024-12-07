require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/Connect");
const authRouter = require("./routes/auth");
const blogRouter = require("./routes/blogs");
const ebookRouter = require("./routes/ebooks");
const elearnRouter = require("./routes/elearnings");
const chatbot = require("./routes/chatbot");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
require("./auth");

app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

// Middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload());

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

app.get("/", (req, res) => {
  res.redirect("http://localhost:5173");
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

const jwt = require("jsonwebtoken");

app.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
  }),
  (req, res) => {
    if (req.user && req.user.emails && req.user.emails[0]) {
      const userEmail = req.user.emails[0].value;

      // Create a JWT
      const token = jwt.sign({ email: userEmail }, process.env.JWT_SECRET, {
        expiresIn: "1d", // Token valid for 1 day
      });

      // Set the cookie
      res.cookie("googleUser", token, {
        httpOnly: true, // Secure cookie
        secure: false, // Use true in production with HTTPS
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      });
    }

    // Redirect to the intended route or home
    const redirectUrl = req.session.returnTo || "http://localhost:5173";
    delete req.session.returnTo;
    res.redirect(redirectUrl);
  }
);

// Middleware to store the original URL
const saveReturnTo = (req, res, next) => {
  if (!req.isAuthenticated() && req.originalUrl !== "/auth/google") {
    req.session.returnTo = req.originalUrl;
  }
  next();
};

// Apply middleware to protected routes
app.get("/protected", saveReturnTo, isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}!`);
});

app.get("/auth/failure", (req, res) => {
  res.send("Something went wrong....");
});

app.get("/logout", (req, res) => {
  req.logOut;
  req.session.destroy();
  res.send("Goodbye :(");
});

// Directory setup
const UPLOAD_DIR = path.join(__dirname, "uploads");
const PDF_UPLOAD_DIR = path.join(UPLOAD_DIR, "pdfs");
const IMAGE_UPLOAD_DIR = path.join(UPLOAD_DIR, "images");

// Serve the uploads directory as static
app.use("/uploads", express.static(UPLOAD_DIR));

// Ensure directories exist
[PDF_UPLOAD_DIR, IMAGE_UPLOAD_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Routes
app.use("/api/user", authRouter);
app.use("/api/blog", blogRouter);
app.use("/api/ebook", ebookRouter);
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
