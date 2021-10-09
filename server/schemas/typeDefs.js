const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Comment {
    _id: ID
    movieTitle: String
    commentText: String
    email: String
    createdAt: String
  }
  type Review {
    _id: ID
    reviewRating: String
    userId: String
    createdAt: String
    #movieId: String
  }
  type Auth {
    token: String
    user: User
  }
  type Movie {
    _id: ID
    Title: String
    Poster: String
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    comments: [Comment]
    reviews: [Review]
    savedMovies: [Movie]
  }
  type Query {
    user(_id: String): User!
    comments(_id: String): [Comment]
    movie(userId: String!): [Movie]
    #comments(userId:ID): Comment
  }
  input savedMovieInput {
    Title: String
    Poster: String
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addComment(userId: ID!, movieTitle: String, commentText: String!): User
    addReview(userId: ID!, reviewRating: String!): User

    saveMovie(savedMovie: savedMovieInput!): User
  }
`;
module.exports = typeDefs;
