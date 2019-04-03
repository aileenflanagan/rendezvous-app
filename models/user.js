const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    groupId: [{ type: String }],
    admin: [{ type: String }]
});

const User = mongoose.model("User ", userSchema);

module.exports = User;