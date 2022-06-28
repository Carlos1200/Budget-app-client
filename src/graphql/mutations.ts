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

export const NEW_CATEGORY_MUTATION = gql`
  mutation CreateCategory($name: String!) {
    createCategory(name: $name) {
      name
      updatedAt
      id
      createdAt
    }
  }
`;

export const NEW_BUDGET_MUTATION = gql`
  mutation CreateBudget($budget: BudgetInput) {
    createBudget(budget: $budget) {
      id
      amount
      remaining
      name
      createdAt
      updatedAt
    }
  }
`;
