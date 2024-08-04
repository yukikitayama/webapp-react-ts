import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type FormType = null | "leetcode" | "performance";

type LayoutState = {
  isFormDialogOpen: boolean;
  formType: FormType;
};

const initialState: LayoutState = {
  isFormDialogOpen: false,
  formType: null,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState: initialState,
  reducers: {
    openFormDialog(state, action: PayloadAction<FormType>) {
      state.isFormDialogOpen = true;
      state.formType = action.payload;
    },
    closeFormDialog(state) {
      state.isFormDialogOpen = false;
    },
  },
});

export const { openFormDialog, closeFormDialog } = layoutSlice.actions;
