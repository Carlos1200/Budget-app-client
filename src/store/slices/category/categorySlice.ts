import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryResponse } from "../../../interface/index";

interface CategoryState {
  categories: CategoryResponse[];
}

const initialState: CategoryState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<CategoryResponse>) => {
      state.categories.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategory } = categorySlice.actions;
