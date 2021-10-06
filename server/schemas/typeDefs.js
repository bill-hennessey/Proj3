const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Review {
    _id: ID
    reviewRating: Int
    reviewAuthor: String
    createdAt: String
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    comments: [String]
    reviews: [String]
  }

  type Query {
    user(userId: ID): User!
    comments(movie: String): Comment
    #comments(userId:ID): Comment
  }
  #REVISIT. DO WE NEED TO REMOVE ANYTHING?
  type Mutation {
    addUser(
      firstName: String!
      lastname: String!
      email: String!
      password: String!
    ): User
    login(email: String!, password: String!): User
    addComment(userId: ID!, commentText: String!): Comment
    addReview(userId: ID!, reviewRating: String!): Review
  }
`;

module.exports = typeDefs;
