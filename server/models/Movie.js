const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  movieTitle: {
    type: String,
  },

  movieImg: {
    type: String,
  },
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
