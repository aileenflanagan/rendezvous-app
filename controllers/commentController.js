const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Comment
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Comment
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    upadte: function(req, res){
        db.Comment
        .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Comment
        .findById({ _id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}