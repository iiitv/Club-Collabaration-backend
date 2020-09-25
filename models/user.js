const mongoose = require("mongoose");
const UserSchema = require("./Schema");
module.exports = mongoose.model("users", UserSchema);
