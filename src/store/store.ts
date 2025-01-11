import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducers = combineReducers({});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
