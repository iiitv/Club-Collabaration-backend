var mongoose = require("mongoose");
const { isEmail, isAlphanumeric } = require("validator");
const bcrypt = require("bcrypt");
const Schema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, min: 3 },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: [isEmail, "please enter a valid email"],
  },
  isAdmin: { type: Boolean, default: false },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 6,
  },
});
Schema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
module.exports = Schema;
