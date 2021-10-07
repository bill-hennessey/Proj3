import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($userId: String!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      email
      }
    }
  }
`;
export const QUERY_MOVIE = gql`
  query movie($userId: String!) {
    movie(userId: $userId) {
      [movies]
      }
    }
  }
`;
