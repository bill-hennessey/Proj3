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
  Title: {
    type: String,
  },
  Poster: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
