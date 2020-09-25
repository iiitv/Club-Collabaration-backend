const express = require("express");
const {
  signUp,
  getAllUsers,
  userLogin,
  handleNotFound,
} = require("../controllers/users-controllers");

const router = express.Router();
router.get("/users", getAllUsers);
router.post("/login", userLogin);
router.post("/signup", signUp);
router.get("*", handleNotFound);
router.post("*", handleNotFound);

module.exports = router;
