const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  reviewRating: {
    type: Number,
  },
  reviewAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
