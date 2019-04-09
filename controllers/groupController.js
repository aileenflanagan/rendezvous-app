const db = require('../models');

module.exports = {
    create: function (req, res) {
        db.Groups
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findAll: function (req, res) {
        db.Groups
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //....................................................

    update: function (req, res) {
        db.Groups
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
    remove: function (req, res) {
        db.Groups.findById(req.params.id)
            .then(dbGroups => dbGroups.remove())
            .then(dbGroups => res.json(dbGroups))
            .catch(err => res.status(422).json(err));
    },

    //........................................................

    findById: function (req, res) {
        console.log("findbyid, groupcontroller");
        db.Groups
            // .find({groupId: { $regex: `${req.params.id}`, $options: "i" }})
            .find({ "_id": req.params.id })
            .then(dbModel => res.json(dbModel), console.log("On: groupController.js"))
            .catch(err => res.status(422).json(err));
    },

    //........................................................

    findByKeywords: function (req, res) {
        console.log("findbykeywords, groupcontroller");
        db.Groups
            .find({ groupName: { $regex: `${req.params.keyword}`, $options: "i" } })
            .then(dbModel => res.json(dbModel), console.log("On: groupController.js"))
            .catch(err => res.status(422).json(err));
    },

}