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
