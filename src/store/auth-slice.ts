import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
