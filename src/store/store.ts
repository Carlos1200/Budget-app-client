import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { budgetSlice, budgetIdSlice } from "./slices/budget";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    budgets: budgetSlice.reducer,
    budgetId: budgetIdSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
