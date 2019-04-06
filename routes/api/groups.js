const router = require("express").Router();
const groupController = require("../../controllers/groupController");
// console.log("On: groups.js")

// Matches with "/api/groups"
router.route("/")
  .get(groupController.findAll)
  .post(groupController.create);

//..............................

  // Matches with "/api/groups/:id"
router
  .route("/:id")
  .get(groupController.findById)
  .put(groupController.update)
  .delete(groupController.remove)
  // .get((req, res) => res.json(true))


  // Matches with "/api/:keyword"
router
  .route("/search/:keyword")
  .get(groupController.findByKeywords);

  
// make new route to findbykeyword
// /keyword
// in your axios /api/keyword

module.exports = router;
