const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    userId: { type: String, required: true },
    description: { type: String, required: true},
    date: { type: Date, default: Date.now },
    like: { type: String },
    // dislike: { type: String }
});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;