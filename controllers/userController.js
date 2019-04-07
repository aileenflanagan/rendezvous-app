const db = require('../models');

module.exports = {
    create: function(req, res){
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        var location = req.body.location;

        var newUser = new db.User({
            userName: username,
            email: email,
            password: password,
            location: location          
        })  

        db.User.hashPass(newUser, function(err, user){
            if(err) throw err;
            // console.log(user)
            db.User
                .create(user)
                .then(data => res.json(data))
                .catch(err => console.log(err));
        })        
    },
    
    //......................................
    findAll: function(req, res){
        db.User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //......................................

    findById: function(req, res) {
        db.User.findById(req.params.id)    
          .then(dbUsers => res.json(dbUsers))
          .catch(err => res.status(422).json(err));
      },

    //.....................................

    update: function(req, res) {
        db.User
        .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.User.findById(req.params.id)
          .then(dbUsers => dbUsers.remove())
          .then(dbUsers => res.json(dbUsers))
          .catch(err => res.status(422).json(err));
      },


}