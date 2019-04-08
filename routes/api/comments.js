const router = require("express").Router();
const commentsController = require("../../controllers/commentsController")


// this is the /api/comments/:groupId route
router.route('/')
    .get(commentsController.findAll)
    .post(commentsController.create)
    // .delete(commentsController.remove);

//.....................................

router.route('/:id')
    .get(commentsController.findAll)
    .post(commentsController.create)
    .delete(commentsController.remove);

    module.exports = router;