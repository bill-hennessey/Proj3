import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
      }
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation saveMovie($input: String!) {
    saveMovie(input: $input) {
      firstName
      lastName
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $userId: ID!
    $commentText: String!
    $Title: String
    $Poster: String
  ) {
    addComment(
      userId: $userId
      commentText: $commentText
      Title: $Title
      Poster: $Poster
    ) {
      firstName
      lastName
      comments {
        commentText
      }
    }
  }
`;
