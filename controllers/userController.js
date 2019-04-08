const db = require('../models');

module.exports = {
    create: function(req, res){
        var username = req.body.userName;
        var email = req.body.email;
        var password = req.body.password;
        var zipCode = req.body.zipCode;

        //check for duplicate users
        db.User.find({email: email}, function(err, found){
            if(found.length>0){
                console.log("Found!", found[0].email);
                return res.json({statusText:"Exists"});
            }else{
                let newUser = new db.User({
                    userName: username,
                    email: email,
                    password: password,
                    zipCode: zipCode          
                })  

                db.User.hashPass(newUser, function(err, user){
                    if(err) throw err;
                    db.User
                        .create(user)
                        .then(() => res.json({statusText:"Creating"}))
                        .catch(err => console.log(err));
                })
            }            
        }).catch(err => console.log(err));              
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

    //.....................................
    remove: function(req, res) {
        db.User.findById(req.params.id)
          .then(dbUsers => dbUsers.remove())
          .then(dbUsers => res.json(dbUsers))
          .catch(err => res.status(422).json(err));
      },


}