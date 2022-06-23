import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../interface";

interface AuthState extends User {
  status: "authenticated" | "unauthenticated" | "loading";
}

const initialState: AuthState = {
  status: "loading",
  email: "",
  name: "",
  id: "",
  createdAt: "",
  updatedAt: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.status = "authenticated";
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = authSlice.actions;
