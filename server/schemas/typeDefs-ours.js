const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Comment {
    _id: ID
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
    comments: [String]
    #[comment]
    reviews: [String]
    savedMovies: [Movie]
  }

  type Query {
    user(_id: String): User!
    comments(movie: String): Comment
    movie(userId: String!): [Movie]
    #comments(userId:ID): Comment
  }

  input savedMovie {
    Title: String
    Poster: String
  }
  #REVISIT. DO WE NEED TO REMOVE ANYTHING?
  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addComment(email: String!, commentText: String!): Comment
    addReview(userId: String!, reviewRating: String!): Review
    #saveMovie(userId: ID!, movieTitle: String!): Movie
    saveMovie(input: savedMovie!): User
  }
`;

module.exports = typeDefs;
