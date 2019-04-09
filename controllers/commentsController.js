const db = require("../models");

module.exports = {

    create: function(req, res) {
        console.log("group controller",req.body)
        db.Comments
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
 //.................................................   

    findAll: function(req, res) {
        db.Comments
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
//..................................................

findMany: function(req, res) {
    db.Comments
        .find({ groupId: { $regex: `${req.params.id}`, $options: "i" } })
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
},
//..................................................


    // not necessary
    // findByGroupId: function(req, res) {
    //     db.Comments
    //     .findAll(req.query)
    //     .then(dbModel => res.json(dbModel))
    //     .then(console.log("dbModel: ", dbModel))
    //     .catch(err => res.status(422).json(err));
    // },

    remove: function(req, res) {
        db.Comments.findById(req.params.id)
          .then(dbComments => dbComments.remove())
          .then(dbComments => res.json(dbComments))
          .catch(err => res.status(422).json(err));
      },

}