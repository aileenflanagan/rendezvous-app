const mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    url: {type: String},
    groupId: [{ type: String }],
    admin: [{ type: String }]
    
});

const User = mongoose.model("User ", userSchema);

User.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, null, function(err, hash) {
            newUser.password = hash;
            // newUser.save(callback)
            callback(err, newUser)
        });
    });
}

//called when checking password
User.comparePassword = function(passwordTry, hash, callback){
    bcrypt.compare(passwordTry, hash, function(err, res) {
        if(err) throw err;
        callback(null, isMatch)
    });
}



module.exports = User;
