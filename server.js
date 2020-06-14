const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors')
const app = express();
const authentication = require("./routes/api/authentication.routes");
const profile = require("./routes/api/profile.routes");
const users = require("./routes/api/users.routes");

const conversation = require("./routes/api/conversation.routes");

app.use(cors())
app.options('*', cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// Routes
app.use('/auth', authentication);
app.use('/profile', profile);
app.use('/user', users);

app.use('/conv', conversation);
// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
