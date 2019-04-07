const router = require("express").Router();
const groupRoutes = require("./groups");
const commentRoutes = require("./comments");
const userRoutes = require("./users");
console.log('in index aip routes')
// Routes
router.use("/groups", groupRoutes);

router.use("/comments", commentRoutes);
router.use("/users", userRoutes);

module.exports = router;
