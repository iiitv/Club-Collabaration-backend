const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const usersRoutes = require("./routes/users-routes");

//Connecting to mongodb server
const dbURI =
  "mongodb+srv://rohith:$Rohith$@jsonweb.gajru.mongodb.net/clubcollab";
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/", usersRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serving app on port ${PORT}`);
});
