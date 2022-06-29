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

export const BUDGETID_QUERY = gql`
  query GetBudget($getBudgetId: ID!) {
    getBudget(id: $getBudgetId) {
      id
      amount
      remaining
      name
      categories {
        id
        name
        transactions {
          id
          amount
          createdAt
        }
        createdAt
      }
      createdAt
    }
  }
`;
