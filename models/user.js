const mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    zipCode: { type: String, required: true },
    image: { type: String },
    groupId: [{ type: String }],
    admin: [{ type: String }]
    
});

const User = mongoose.model("User", userSchema);

User.hashPass = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, null, function(err, hash) {
            newUser.password = hash;
            callback(err, newUser)
        });
    });
}

module.exports = User;
