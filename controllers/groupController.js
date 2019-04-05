const db = require('../models');

module.exports = {
    findAll: function(req, res){
        db.Group
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findByKeywords: function(req, res){
        console.log("findbykeywords, groupcontroller");
        db.Group
            .find({groupName: { $regex: `${req.params.keyword}`, $options: "i" }})
            .then(dbModel => res.json(dbModel), console.log("On: groupController.js"))
            .catch(err => res.status(422).json(err));
    },

    // findByZip: function(req, res){
    //     db.Groups
    //         .find()
    //         .then()
    //         .catch(err => res.status(422).json(err));
    // },
    create: function(req, res){
        db.Group
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Group
        .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Group
        .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}