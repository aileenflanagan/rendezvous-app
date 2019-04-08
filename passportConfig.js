const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
var bcrypt = require("bcrypt-nodejs");
const User = require('./models/user');

module.exports = function(passport){
  passport.use(new LocalStrategy( { usernameField: 'email' },
    function(email, password, done) {      
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, {message: 'Unknown User'}); }  
               
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      })
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}