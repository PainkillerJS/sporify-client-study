import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { TrackModel } from "@shared/model/track.model";

interface PlayerInitialState {
  active: TrackModel | null;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}

const initialState: PlayerInitialState = {
  currentTime: 0,
  duration: 0,
  active: null,
  pause: true,
  volume: 0
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    pausePlayer: (state) => {
      state.pause = true;
    },
    startPlayer: (state) => {
      state.pause = false;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setActive: (state, action: PayloadAction<TrackModel>) => {
      state.active = action.payload;
      state.duration = 0;
      state.currentTime = 0;
    }
  }
});

export const {
  pausePlayer,
  startPlayer,
  setCurrentTime,
  setVolume,
  setDuration,
  setActive
} = playerSlice.actions;

export default playerSlice.reducer;
