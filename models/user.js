const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = require("./Schema");

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("users", UserSchema);
