import Image from "next/image";

import { Card, Grid, IconButton } from "@mui/material";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";

import styles from "./trackItem.module.scss";

import type { FC } from "react";
import type { TrackModel } from "@shared/model/track.model";

interface TrackItemProps {
  track: TrackModel;
  isActive?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, isActive }) => {
  const { name, picture, artist } = track;

  return (
    <Card className={styles.track}>
      <IconButton>{isActive ? <Pause /> : <PlayArrow />}</IconButton>
      <Image width={70} height={70} src={picture} alt="Картинка трека" />
      <Grid container direction="column" className={styles.track__data}>
        <div>{name}</div>
        <div className={styles["track__data-artist"]}>{artist}</div>
      </Grid>
      {isActive && <div></div>}
      <IconButton className={styles.track__delete}>
        <Delete />
      </IconButton>
    </Card>
  );
};

TrackItem.defaultProps = {
  track: {} as TrackModel,
  isActive: false
};

export default TrackItem;
