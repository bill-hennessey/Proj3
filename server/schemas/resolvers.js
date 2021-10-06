const { Comment } = require("../models");
const { Review } = require("../models");
const { User } = require("../models");
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
  },
};

module.exports = resolvers;
