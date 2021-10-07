const { Schema, model } = require("mongoose");
// const User = require("./User");

const commentSchema = new Schema({
  commentText: {
    type: String,
    required: "You need to leave a thought!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  email: {
    type: String,
    ref: "User",
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
