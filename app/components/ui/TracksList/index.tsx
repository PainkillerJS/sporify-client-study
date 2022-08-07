import { Box, Grid } from "@mui/material";
import TrackItem from "@ui/TrackItem";

import type { FC } from "react";
import type { TrackModel } from "@shared/model/track.model";

interface TracksListProps {
  tracks: TrackModel[];
}

const TracksList: FC<TracksListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track.name} track={track} />
        ))}
      </Box>
    </Grid>
  );
};

TracksList.defaultProps = {
  tracks: []
};

export default TracksList;
