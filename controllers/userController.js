const db = require('../models');

module.exports = {
    create: function(req, res){
        db.Users
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res){
        db.Users
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Users
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
<<<<<<< HEAD
    findAll: function(req, res){
        db.Users
=======
    find: function(req, res){
        db.User
>>>>>>> 9bf3d7cb75f21d7fd4e32bcbe62367cddc366dce
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}