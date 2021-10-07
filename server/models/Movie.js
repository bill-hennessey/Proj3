const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  Title: {
    type: String,
  },

  Poster: {
    type: String,
  },
});

module.exports = movieSchema;
