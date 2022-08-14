import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "@services/player/slice";

const store = configureStore({
  reducer: {
    player: playerReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
