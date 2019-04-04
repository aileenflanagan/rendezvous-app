const mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    userName: {type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    groupId: [{ type: String }],
    admin: [{ type: String }]
});

const Users = mongoose.model("Users ", usersSchema);

<<<<<<< HEAD
module.exports = Users;
=======
User.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback)
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
>>>>>>> 9bf3d7cb75f21d7fd4e32bcbe62367cddc366dce
