const db = require('../models');

module.exports = {
    create: function(req, res){
    db.Groups
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
    },

    findAll: function(req, res){
        db.Groups
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
 
//....................................................
    
    update: function(req, res) {
        db.Groups
        .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Groups.findById(req.params.id)
          .then(dbGroups => dbGroups.remove())
          .then(dbGroups => res.json(dbGroups))
          .catch(err => res.status(422).json(err));
      },

//........................................................

findById: function(req, res) {
    db.Groups.findById(req.params.id)    
      .then(dbGroups => res.json(dbGroups))
      .catch(err => res.status(422).json(err));
  },

//........................................................

    findByKeywords: function(req, res){
        db.Groups
            .find({groupName: { $regex: `${req.params.searchTerm}`, $options: "i" }})
    },
    
}