require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/Connect");
const authRouter = require("./routes/auth");
const blogRouter = require("./routes/blogs");
const ebookRouter = require("./routes/ebooks");
const elearnRouter = require("./routes/elearnings");
const cors = require("cors");
//
const fileUpload = require("express-fileupload");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/user", authRouter);
app.use("/api/blog", blogRouter);
app.use("/api/ebook", ebookRouter);
app.use("/api/elearn", elearnRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// testing
app.use(fileUpload());

const UPLOAD_DIR = path.join(__dirname, "uploads"); // Adjust to your cPanel directory
app.use("/uploads", express.static(UPLOAD_DIR)); // Serve static files

app.post("/upload", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No file was uploaded.");
  }

  const file = req.files.file;

  // Validate file type to ensure it's an image
  if (!file.mimetype.startsWith("image/")) {
    return res.status(400).send("Only image files are allowed.");
  }

  // Generate a unique name for the image while preserving its extension
  const fileExtension = path.extname(file.name); // Extract file extension
  const uniqueFileName = `${uuidv4()}${fileExtension}`; // Combine UUID with extension

  // Save the image to the upload directory with the unique name
  const uploadPath = path.join(UPLOAD_DIR, uniqueFileName);

  file.mv(uploadPath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    // Construct the public URL for the uploaded image
    const fileUrl = `${req.protocol}://${req.get(
      "host"
    )}/uploads/${uniqueFileName}`;

    res.send({
      message: "Image uploaded successfully!",
      fileUrl, // Return the image URL in the response
    });
  });
});

const start = async () => {
  const port = 3000;
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.error(error);
  }
};

start();
