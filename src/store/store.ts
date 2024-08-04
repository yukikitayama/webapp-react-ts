import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./auth-slice";
import { layoutSlice } from "./layout-slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    layout: layoutSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;