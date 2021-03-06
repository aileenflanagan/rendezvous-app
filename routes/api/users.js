const router = require("express").Router();
const User = require('../../models/user');
const userController = require("../../controllers/userController");

const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: "dqadqluxx",
  api_key: "618381916967669",
  api_secret: "1bomeODECnYIR817uCouYk1SqPM"
})

const passport = require('passport');

//login route /api/users/login
router.route("/login")
  .post((req, res, next) => { next() }, passport.authenticate('local'),
    (request, response) => {
      // console.log(request.user);
      response.json(request.user._id);
    });

//logout
router.route('/logout')
  .get(function (req, res) {
    req.logOut();
  })

// Matches with "/api/users/register"
router
  .route("/register")
  .post(userController.create);

router.route("/userSave").post(function (req, res) {
  console.log("we hit the route", req.body)
  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))

  Promise
    .all(promises)
    .then(results => {
      console.log('these are our results!!!', results);
      res.json(results[0]);  
    })
  // console.log("heres our pics", values)
})

//........................................
// Matches with "/api/users"
router.route("/")
  .get(userController.findAll);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove)

router.route("/join/:userId/:groupId")
  .put(userController.joinGroupUser);


module.exports = router;

