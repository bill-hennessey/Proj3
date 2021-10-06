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
    movieId: String
  }

  type Auth {
    token: String
    user: User
  }

  type Movie {
    _id: ID
    movieTitle: String
    movieImg: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    comments: [String]
    reviews: [String]
    movies: [Movie]
  }

  type Query {
    user(userId: ID): User!
    comments(movie: String): Comment
    movie(userId: ID!): [Movie]
    #comments(userId:ID): Comment
  }

  input savedMovie {
    movieTitle: String
    movieImg: String
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
    addComment(userId: ID!, commentText: String!): Comment
    addReview(userId: ID!, reviewRating: String!): Review
    #saveMovie(userId: ID!, movieTitle: String!): Movie
    saveMovie(input: savedMovie!): User
  }
`;

module.exports = typeDefs;
