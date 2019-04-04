const router = require("express").Router();
const User = require('../../models/user');
const userController = require("../../controllers/userController");
const passport = require('passport');

//login route /api/users/login
router.route("/login")
  .post(passport.authenticate('local'), 
  function(req, res){
    // If this function gets called, authentication was successful. 'req.user' contains the authenticated user.
    res.redirect('/') 
  });

//logout
router.route('/logout')
  .get(function(req, res){
    req.logOut();
  })

// Matches with "/api/users/register"
router
  .route("/register")
  .post(function(req, res){
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var location = req.body.location;

    // req.checkBody('username', "Username Required").notEmpty();
    // req.checkBody('email', "Please enter valid email").isEmail().notEmpty();
    // req.checkBody('password', "Password Required").notEmpty();
    // //password-2?
    // req.checkBody('location', "Location Required").notEmpty();

    var newUser = new User({
      userName: username,
      email: email,
      password: password,
      location: location          
    })   

    var errors = false;

    if(errors){
      console.log("Register error")
    }else{          
      res.json(newUser);
      User.createUser(newUser, function(err, user){
        if(err) throw err;
        console.log("user", user);
        userController.create(user)
      })
    }
    
  });

module.exports = router;

