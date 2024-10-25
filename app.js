const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users-routes");
const { Account } = require("./models/index");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//Connecting to mongodb server and storing ip_data
mongoose
  .connect(process.env.MONGODB_URI,{})
  .then(
    () => console.log('DB connection success'),
    (err) => console.log('Error connecting to DB', err)
  )

app.use(express.json());

app.use(
  require("express-session")({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

//Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
passport.use(Account.createStrategy());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/", usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Serving app on port ${PORT}`);
});
