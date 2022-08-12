import Image from "next/image";
import Link from "next/link";

import { Card, Grid, IconButton } from "@mui/material";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";

import styles from "./trackItem.module.scss";

import type { FC, MouseEventHandler } from "react";
import type { TrackModel } from "@shared/model/track.model";

interface TrackItemProps {
  track: TrackModel;
  isActive?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, isActive }) => {
  const { name, picture, artist, _id } = track;

  const handleStopPropagation: MouseEventHandler<HTMLButtonElement> = (event) =>
    event.stopPropagation();

  return (
    <Link href={`/tracks/${_id}`}>
      <Card className={styles.track}>
        <IconButton onClick={handleStopPropagation}>
          {isActive ? <Pause /> : <PlayArrow />}
        </IconButton>
        <Image width={70} height={70} src={picture} alt="Картинка трека" />
        <Grid container direction="column" className={styles.track__data}>
          <div>{name}</div>
          <div className={styles["track__data-artist"]}>{artist}</div>
        </Grid>
        {isActive && <div></div>}
        <IconButton
          onClick={handleStopPropagation}
          className={styles.track__delete}
        >
          <Delete />
        </IconButton>
      </Card>
    </Link>
  );
};

TrackItem.defaultProps = {
  track: {} as TrackModel,
  isActive: false
};

export default TrackItem;
