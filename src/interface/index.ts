export interface UserResponse {
  user: User;
  token: string;
}

export interface User {
  createdAt: string;
  updatedAt: string;
  email: string;
  id: string;
  name: string;
}

export interface CategoryResponse {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthenticateUserInput {
  email: string;
  password: string;
}

export interface newUserInput {
  name: string;
  email: string;
  password: string;
}

export interface BudgetResponse {
  id: string;
  name: string;
  amount: number;
  remaining: number;
  createdAt: string;
  updatedAt: string;
}
