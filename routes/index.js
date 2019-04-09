const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require('passport');

// API Routes
router.use("/api", apiRoutes);
console.log("On: routes/index.js");

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   // console.log(req.user);
// });

module.exports = router;