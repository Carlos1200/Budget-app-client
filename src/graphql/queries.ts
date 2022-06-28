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

export const BUDGET_QUERY = gql`
  query GetBudgetsByUser {
    getBudgetsByUser {
      id
      amount
      remaining
      name
      createdAt
      updatedAt
    }
  }
`;
