import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BudgetResponse } from "../../../interface";

interface BudgetState {
  budgets: BudgetResponse[];
  loading: boolean;
}

const initialState: BudgetState = {
  budgets: [],
  loading: false,
};

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setBudgets: (state, action: PayloadAction<BudgetResponse[]>) => {
      state.budgets = action.payload;
      state.loading = false;
    },
    setBudget: (state, action: PayloadAction<BudgetResponse>) => {
      state.budgets = [...state.budgets, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBudgets, setBudget } = budgetSlice.actions;
