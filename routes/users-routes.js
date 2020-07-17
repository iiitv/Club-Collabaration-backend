const express = require("express");
const {check} = require("express-validator");

const usersController = require("../controllers/users-controllers");

const router = express.Router();

router.get("/", usersController.getUsers);

router.get(
  "/signup",
  [
    check("username").isNumber(),
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("mobile").isLength({ min: 9 }),
    check("password").isLength({ min: 6})
  ],
  usersController.signup
);

router.post("/login", usersController.login);

module.exports = router;
