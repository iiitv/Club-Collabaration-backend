var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//mongodb packages
var mongoose = require("mongoose");

//routes
const usersRoutes = require('./routes/users-routes');

//passport packages
var LocalStrategy = require("passport-local");
var passport = require("passport");
var passportLocalMongoose = require("passport-local-mongoose");


var User = require("./models/user");
var Admin = require("./models/admin");

//encryting password
app.use(require("express-session")({
  secret: "kuch bhi likh do",
  resave: false,
  saveUninitialized: false
}));

//Connecting to mongodb server and storing ip_data
mongoose.connect("mongodb://localhost:27017/club_collaboration", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

app.use(bodyParser.urlencoded({extended: true}));

//Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

//passing current user to every route
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

//to pass data to react
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use("/", usersRoutes);

//get requests
app.get("/checkAuthentication", isLoggedIn, (req, res){
  const authenticated: boolean = typeof req.user !== 'undefined';
  res.status(200).json({
    authenticated,
  });
});


//middleware
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/l");
}

//PORT
app.listen(5000, function(){
  console.log("Serving app on port 3000");
});
