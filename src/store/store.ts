import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth";

const rootReducers = combineReducers({
  auth: AuthReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
