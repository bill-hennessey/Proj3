const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  movieTitle: {
    type: String,
  },

  movieImg: {
    type: String,
  },
});

module.exports = movieSchema;
