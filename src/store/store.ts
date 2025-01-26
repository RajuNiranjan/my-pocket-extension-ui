import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth.slice";
import PocketReducer from "./features/pocket.slice";
import ThemeReducer from "./features/them.slice";
import MsgReducer from "./features/msg.slice";

const rootReducers = combineReducers({
  auth: AuthReducer,
  pocket: PocketReducer,
  theme: ThemeReducer,
  msg: MsgReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
