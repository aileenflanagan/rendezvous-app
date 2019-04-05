const router = require("express").Router();
const User = require('../../models/user');
const userController = require("../../controllers/userController");
const passport = require('passport');

//login route /api/users/login
router.route("/login")
  .post(passport.authenticate('local'), function(req, res){
    // If this function gets called, authentication was successful. 'req.user' contains the authenticated user.
    res.redirect('/') 
  });

//logout
router.route('/logout')
  .get(function(req, res) {
    req.logOut();
  })

// Matches with "/api/users/register"
router
  .route("/register")
  .post(userController.create);

module.exports = router;

