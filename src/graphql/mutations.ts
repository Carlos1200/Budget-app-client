import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation authenticateUser($user: AuthenticateUserInput) {
    authenticateUser(user: $user) {
      user {
        createdAt
        updatedAt
        email
        id
        name
      }
      token
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation RegisterUser($user: UserInput) {
    registerUser(user: $user) {
      user {
        id
        name
        email
        createdAt
        updatedAt
      }
      token
    }
  }
`;
