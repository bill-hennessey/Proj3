const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  reviewRating: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  movieId: {
    type: String,
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
