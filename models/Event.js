var mongoose = require("mongoose");

var EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Event title is required",
      minlength: [3, "Event title must be at least 3 characters long."],
    },
    description: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      required: "Event date is required",
    },
    location: {
      type: String,
      required: "Event location is required",
    },
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
      required: "Associated club is required",
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
