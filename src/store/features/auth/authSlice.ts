import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: null | string;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isLoading: false,
  error: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.isLoading = true;
    },
    authFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    authSuccess: (state) => {
      state.isLoading = false;
    },
  },
});

export const { authFailure, authStart, authSuccess } = authSlice.actions;
export default authSlice.reducer;
