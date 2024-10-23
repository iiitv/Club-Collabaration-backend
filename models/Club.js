var mongoose = require("mongoose");

var ClubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Club name is required",
      minlength: [3, "Club name must be at least 3 characters long."],
    },
    description: {
      type: String,
      trim: true,
    },
    members: [
      {
        account: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Account",
        },
        role: {
          type: String,
          enum: ["admin", "member", "organizer"],
          default: "member",
        },
      },
    ],
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    announcements: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Announcement",
      },
    ],
  },
  { timestamps: true }
);

const Club = mongoose.model("Club", ClubSchema);
module.exports = Club;
