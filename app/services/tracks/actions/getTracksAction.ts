import { createAsyncThunk } from "@reduxjs/toolkit";

import { TrackModel } from "@shared/model/track.model";
import { getTracks } from "@packages/api/rest/tracks";

export const getTracksAction = createAsyncThunk<TrackModel[]>(
  "tracks/getTracks",
  async () => {
    const tracks = await getTracks<TrackModel[]>();

    return tracks.data;
  }
);
