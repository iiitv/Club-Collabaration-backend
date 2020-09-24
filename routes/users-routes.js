const express = require("express");
const {
  signUp,
  getAllUsers,
  userLogin,
} = require("../controllers/users-controllers");

const router = express.Router();
router.get("/users", getAllUsers);
router.post("/login", userLogin);
router.post("/signup", signUp);

// router.post("/signup", usersController.signup);

// router.post("/login", usersController.login);

module.exports = router;
