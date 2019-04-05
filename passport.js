const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

module.exports = function(){
  passport.use(new LocalStrategy(
    function(username, password, done) {
      //might move to model
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, {message: 'Unknown User'}); }      
      });

      User.comparePassword(password, user.password, function(err, isMatch){
        if (err) { return done(err); }
        if(isMatch){
          return done(null, user);
        } else {
          return done(null, false, {message: 'Invalid password'});
        }
      })
    }
  ));
}

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});