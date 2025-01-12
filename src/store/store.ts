import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth.slice";
import PocketReducer from "./features/pocket.slice";

const rootReducers = combineReducers({
  auth: AuthReducer,
  pocket: PocketReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
