var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var AccountSchema = new mongoose.Schema({
  email: {
    type:String,
    required:'Email address is required',
    trim:true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  name: {
    type:String,
    required:'Name is required',
    minlength:[3,'Name must be atleast 3 characters long.']
  },
  isVerified:{
    type:Boolean,
    default:false
  }
})

AccountSchema.set("toJSON",{
  transform:(doc,ret)=>{
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

AccountSchema.plugin(passportLocalMongoose,{usernameField: 'email'})

const Account = mongoose.model("Account", AccountSchema)

// Club Schema
var ClubSchema = new mongoose.Schema({
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
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
});

const Club = mongoose.model("Club", ClubSchema);

// Event Schema
var EventSchema = new mongoose.Schema({
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
});

const Event = mongoose.model("Event", EventSchema);

// Announcement Schema
var AnnouncementSchema = new mongoose.Schema({
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
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Club",
    required: "Associated club is required",
  },
});

const Announcement = mongoose.model("Announcement", AnnouncementSchema);

module.exports = { Account, Club, Event, Announcement };

