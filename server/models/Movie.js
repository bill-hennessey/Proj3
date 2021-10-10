const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  Title: {
    type: String,
  },

  Poster: {
    type: String,
  },
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
