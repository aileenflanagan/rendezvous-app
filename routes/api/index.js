const router = require("express").Router();
const groupRoutes = require("./groups");
const commentRoutes = require("./comments");
const userRoutes = require("./users");

// Routes
router.use("/groups", groupRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);

module.exports = router;
