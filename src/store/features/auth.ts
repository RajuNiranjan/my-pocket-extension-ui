import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType, User } from "../types/auth.type";
import { axiosInstance } from "../../utils/axios";

const initialState: UserType = {
  authUser: null,
  isAuthLoading: false,
  error: null,
};

export const fetchUser = createAsyncThunk<User, void, { rejectValue: string }>(
  "auth/me",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("pocket");

      const res = await axiosInstance.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.user;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user data"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authPending: (state) => {
      state.isAuthLoading = true;
      state.authUser = null;
      state.error = null;
    },
    authRejected: (state, action: PayloadAction<string>) => {
      state.isAuthLoading = false;
      state.authUser = null;
      state.error = action.payload;
    },
    authFullFilled: (state) => {
      state.isAuthLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isAuthLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isAuthLoading = false;
        state.authUser = action.payload;
        state.error = null;
      })
      .addCase(
        fetchUser.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isAuthLoading = false;
          state.error = action.payload || "An unknown error occurred";
        }
      );
  },
});

export const { authFullFilled, authPending, authRejected } = authSlice.actions;
export default authSlice.reducer;
