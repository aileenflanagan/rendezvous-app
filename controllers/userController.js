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
    update: function(req, res){
        db.User
            .find(req.query)
            .then(data => res.json(data))
            .catch(err => console.log(err));
    },
    remove: function(req, res){
        db.User
            .find(req.query)
            .then(data => res.json(data))
            .catch(err => console.log(err));
    },
    find: function(req, res){
        db.User
            .find(req.query)
            .then(data => res.json(data))
            .catch(err => console.log(err));
    }
}