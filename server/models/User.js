const { Schema, model } = require("mongoose");
const movieSchema = require("./Movie");
const bcrypt = require("bcrypt");
const Comment = require("./Comment");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  savedMovies: [movieSchema],
  reviews: [
    {
      type: String,
      trim: true,
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
