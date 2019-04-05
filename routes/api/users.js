const router = require("express").Router();
const userController = require("../../controllers/userController");
const cloudinary = require('cloudinary')
cloudinary.config({ 
  cloud_name: "dqadqluxx", 
  api_key: "618381916967669", 
  api_secret: "1bomeODECnYIR817uCouYk1SqPM"
})



// Matches with "/api/users"
router.route("/users")
  // .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/users:id")
  // .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router.route("/userSave").post(function(req, res) {
  console.log("we hit the route", req.body)
  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
  Promise
    .all(promises)
    .then(results => console.log('these are our results!!!', results))
  // console.log("heres our pics", values)
})  

module.exports = router;

