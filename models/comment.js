const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var commentsSchema = new Schema({

    userId: { 
        type: String, 
        required: true },

    description: { 
        type: String, 
        required: true},

    date: { 
        type: Date, 
        default: Date.now },

    like: { 
        type: String }
    // dislike: { type: String }
});

var Comments = mongoose.model("comments", commentsSchema);

module.exports = Comments;