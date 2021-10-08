const { AuthenticationError } = require("apollo-server-errors");
const { Comment } = require("../models");
const { Review } = require("../models");
const { User } = require("../models");
const Movie = require("../models/Movie");
const { signToken } = require("../utils/auth");

// fieldName: (parent, args, context, info) => data;
const resolvers = {
  Query: {
    comments: async () => {
      return await Comment.find(); //.sort({ createdAt: -1 });
    },
    user: async (parent, { _id }) => {
      return await User.findById({ _id }).populate("comments");
    },
    movie: async (parent, args) => {
      return await User.findById(args.id).populate("movies");
    },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },

    addComment: async (parent, { userId, title, commentText }, context) => {
      // if (context.user) {
      const commentInfo = await Comment.create({ title, commentText });
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            comments: commentInfo._id,
          },
        },
        { new: true }
      ).populate("comments");
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },

    addReview: async (parent, { userId, reviewRating }, context) => {
      if (context.user) {
        const reviewInfo = await Review.create({ reviewRating });
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: {
              reviews: reviewInfo._id,
            },
          },
          { new: true }
        ).populate("reviews");
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    saveMovie: async (parent, { userId, savedMovie }, context) => {
      if (context.user) {
        const movieInfo = await Movie.create({ savedMovie });
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: {
              savedMovies: movieInfo._id,
            },
          },
          { new: true }
        ).populate("savedMovies");
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log(email, password);
      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
