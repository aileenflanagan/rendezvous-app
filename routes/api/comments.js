const router = require("express").Router();
const commentsController = require("../../controllers/commentsController")
//controller import

// this is the /api/comments/:groupId route
router.route('/:groupId')
    .get(commentsController.findById)
    .post(commentsController.create)
    .delete(commentsController.remove);

    module.exports = router;