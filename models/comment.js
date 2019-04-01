const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userId: { type: String, required: true },
    description: { type: String, required: true},
    date: { type: Date, default: Date.now },
    like: { type: String },
    // dislike: { type: String }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;