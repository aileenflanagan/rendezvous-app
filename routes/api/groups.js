const router = require("express").Router();
var express = express.Router()
var groups = require('../models/groups')
//controller for 

// this is the get all /api/groups route
router.get('/', function(req, res){
    groups.find()
})
    .get()
    .post()

// this is the /api/groups/:id route
router.route('/:id')
    .get()
    .post()    



module.exports = router
