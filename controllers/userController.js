const db = require('../models');
// var ObjectId = require('mongoose').Types.ObjectId
var mongoose = require('mongoose')

module.exports = {
    create: function (req, res) {
        var username = req.body.userName;
        var email = req.body.email;
        var password = req.body.password;
        var zipCode = req.body.zipCode;

        //check for duplicate users
        db.User.find({ email: email }, function (err, found) {
            if (found.length > 0) {
                console.log("Found!", found[0].email);
                return res.json({ statusText: "Exists" });
            } else {
                let newUser = new db.User({
                    userName: username,
                    email: email,
                    password: password,
                    zipCode: zipCode,
                    image: "test"
                })

                db.User.hashPass(newUser, function (err, user) {
                    if (err) throw err;
                    db.User
                        .create(user)
                        .then(() => res.json({ statusText: "Creating" }))
                        .catch(err => console.log(err));
                })
            }
        }).catch(err => console.log(err));
    },

    //......................................
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //......................................
    findById: function (req, res) {
        console.log("this the id we looking for", req.params.id)
        db.User.findById(req.params.id)
            .then((dbUsers) => {
                console.log("this is the user we found", dbUsers)
                res.json(dbUsers)
            })
            .catch((err) => {
                console.log("this is our error", err)
                res.status(422).json(err)
            });
    },
    
    // join button route attempt
    //......................................
    // findByUserIdAndUpdateGroupArray: function (req, res) {
    //     console.log("boop: ", req.params.id);
    //     // db.User
    //         // .findOneAndUpdate({ _id:})
    // },

    //.....................................
    update: function (req, res) {
        console.log("this is what we're updating", req.body)
        console.log("kdljfsdf", req.params.id)
        db.User
            .findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) }, { image: req.body.image })
            .then((dbModel) => {
                console.log("updated this", dbModel)
                res.json(dbModel)
            })
            .catch((err) => {
                console.log("catch err", err)
                res.status(422).json(err)

            });
    },

    //.....................................
    remove: function (req, res) {
        db.User.findById(req.params.id)
            .then(dbUsers => dbUsers.remove())
            .then(dbUsers => res.json(dbUsers))
            .catch(err => res.status(422).json(err));
    },


}