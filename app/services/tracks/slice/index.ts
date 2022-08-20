import { createSlice } from "@reduxjs/toolkit";

import { getTracksAction } from "@services/tracks/actions/getTracksAction";

import type { TrackModel } from "@shared/model/track.model";

interface TracksInitialState {
  tracks: TrackModel[];
  tracksLoading: boolean;
}

const initialState: TracksInitialState = {
  tracks: [],
  tracksLoading: false
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTracksAction.pending, (state) => {
      state.tracksLoading = true;
    });
    builder.addCase(getTracksAction.fulfilled, (state, action) => {
      state.tracks = action.payload;
    });
  }
});

export default tracksSlice.reducer;
