const express = require("express");
const {
  Register,
  Login,
  getUsers,
  getSingleUser,
  updateUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/users", getUsers);
router.get("/users/:id", getSingleUser);
router.put("/users/:id", updateUser);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:id/:token", resetPassword);
module.exports = router;
