const formData = require('express-form-data')    
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser');
const passport = require('passport');
require('./passportConfig')(passport);
const session = require('express-session')

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(formData.parse());
// app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rendezvousdb", { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected....'))
.catch(err => console.log(err));

//express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

//passport stuff
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(` API Server now listening on PORT ${PORT}!`);
});