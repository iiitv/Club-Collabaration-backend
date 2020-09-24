const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const AdminSchema = require("./Schema");
module.exports = mongoose.model("Admin", AdminSchema);
