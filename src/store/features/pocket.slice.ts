import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pocket, PocketType } from "../types/pocket.type";

const initialState: PocketType = {
  pocketItem: [],
  isPocketLoading: false,
  error: null,
};

const pocketSlice = createSlice({
  name: "pocket",
  initialState,
  reducers: {
    pocketPending: (state) => {
      state.isPocketLoading = true;
    },
    pocketFullFill: (state, action: PayloadAction<Pocket[]>) => {
      state.isPocketLoading = false;
      state.pocketItem = action.payload;
    },
    pocketReject: (state, action: PayloadAction<string>) => {
      state.isPocketLoading = false;
      state.error = action.payload;
    },
  },
});

export const { pocketPending, pocketFullFill, pocketReject } =
  pocketSlice.actions;
export default pocketSlice.reducer;
