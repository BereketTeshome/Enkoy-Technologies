const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: [true, "email already exists"],
    },
    username: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.password || !this.isModified("password")) {
    return next();  // Skip hashing if no password or not modified
  }
  
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);  // Pass the error to Mongoose
  }
});


UserSchema.methods.createToken = function () {
  return jwt.sign(
    {
      userId: this._id,
      email: this.email,
      username: this.username,
      profileImg: this.profileImg,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
};

UserSchema.methods.compare = async function (password) {
  const match = await bcrypt.compare(password, this.password);
  return match;
};

module.exports = mongoose.model("User", UserSchema);
