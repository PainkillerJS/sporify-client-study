import { useRouter } from "next/router";

import { Box, Button, Card, Grid } from "@mui/material";

import TracksList from "@ui/TracksList";

import type { FC } from "react";

const TracksListScreen: FC = () => {
  const router = useRouter();

  const handleGoToLoadedTracks = () => router.push("/tracks/create");

  return (
    <Grid container justifyContent="center">
      <Card style={{ width: 900 }}>
        <Box p={3}>
          <Grid container justifyContent="space-between">
            <h1>Список треков</h1>
            <Button onClick={handleGoToLoadedTracks}>Загрузить</Button>
          </Grid>
        </Box>

        <TracksList />
      </Card>
    </Grid>
  );
};

export default TracksListScreen;
