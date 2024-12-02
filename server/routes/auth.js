const express = require("express");
const {
  Register,
  Login,
  getUsers,
  getSingleUser,
  updateUser,
} = require("../controllers/auth");
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/users", getUsers);
router.get("/users/:id", getSingleUser);
router.put("/users/:id", updateUser);

module.exports = router;
