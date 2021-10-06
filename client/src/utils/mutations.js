import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($firstName: String!,$lastName: String!, $email: String!, $password: String!) {
    addProfile($firstName: String!,$lastName: String!, email: $email, password: $password) {
      token
      profile {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        firstName
        lastName
      }
    }
  }
`;
