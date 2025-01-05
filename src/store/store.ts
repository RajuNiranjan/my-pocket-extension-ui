import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth/authSlice";

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
