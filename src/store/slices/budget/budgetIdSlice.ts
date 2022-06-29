import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetBudget } from "../../../interface";

interface BudgetIdState extends GetBudget {
  loading: boolean;
}

const initialState: BudgetIdState = {
  id: "",
  amount: 0,
  remaining: 0,
  name: "",
  categories: [],
  createdAt: "",
  loading: true,
};

export const budgetIdSlice = createSlice({
  name: "budgetId",
  initialState,
  reducers: {
    setBudgetId: (state, action: PayloadAction<GetBudget>) => {
      state.id = action.payload.id;
      state.amount = action.payload.amount;
      state.remaining = action.payload.remaining;
      state.name = action.payload.name;
      state.categories = action.payload.categories;
      state.createdAt = action.payload.createdAt;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBudgetId } = budgetIdSlice.actions;
