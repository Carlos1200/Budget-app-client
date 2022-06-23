import { gql } from "@apollo/client";

export const AUTHUSER_QUERY = gql`
  query GetAuthUser {
    getAuthUser {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
