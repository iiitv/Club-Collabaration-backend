var mongoose = require("mongoose");

var AnnouncementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Announcement title is required",
      minlength: [3, "Announcement title must be at least 3 characters long."],
    },
    content: {
      type: String,
      required: "Announcement content is required",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: "Writer is required",
    },
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
      required: "Associated club is required",
    },
  },
  { timestamps: true }
);

const Announcement = mongoose.model("Announcement", AnnouncementSchema);
module.exports = Announcement;
