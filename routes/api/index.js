const router = require("express").Router();
const groupRoutes = require("./groups");
const commentRoutes = require("./comments");

// Routes
router.use("/groups", groupRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
