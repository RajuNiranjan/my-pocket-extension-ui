import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pocket, PocketType } from "../types/pocket.type";

const initialState: PocketType = {
  pocketItem: [],
  isPocketLoading: false,
  error: null,
  selectedPocketItemId: null,
  sharedPocketItem: [],
  selectedUserId: null,
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
    setSelectedPocketItemId: (state, action: PayloadAction<string>) => {
      state.selectedPocketItemId = action.payload;
    },
    setSelectedUserId: (state, action: PayloadAction<string>) => {
      state.selectedUserId = action.payload;
    },
  },
});

export const {
  pocketPending,
  pocketFullFill,
  pocketReject,
  setSelectedPocketItemId,
  setSelectedUserId,
} = pocketSlice.actions;
export default pocketSlice.reducer;
