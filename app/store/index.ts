import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "@services/player/slice";
import tracksReducer from "@services/tracks/slice";

const store = configureStore({
  reducer: {
    player: playerReducer,
    tracks: tracksReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
