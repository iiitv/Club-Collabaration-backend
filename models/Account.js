var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var AccountSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: "Email address is required",
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: "Name is required",
      minlength: [3, "Name must be at least 3 characters long."],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

AccountSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

AccountSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const Account = mongoose.model("Account", AccountSchema);
module.exports = Account;
