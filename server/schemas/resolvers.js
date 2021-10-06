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
    user: async (parent, args) => {
      return await User.findById(args.id).populate("comments");
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
    // userID? Does it need to be in the model?
    addReview: async (parent, { userId, reviewRating }) => {
      return Review.create({ userId, reviewRating });
    },
    // userID? Does it need to be in the model?
    addComment: async (parent, { userId, commentText }) => {
      return Comment.create({ userId, commentText });
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
