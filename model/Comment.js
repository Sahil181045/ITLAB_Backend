const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    hotelName: {
        type: String,
        required: true
    },
    commentContent: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("comments", CommentSchema);