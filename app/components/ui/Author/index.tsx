import { Grid } from "@mui/material";

import styles from "./author.module.scss";

import type { TrackModel } from "@services/../../../shared/model/track.model";
import type { FC } from "react";

interface AuthorProps extends Partial<Pick<TrackModel, "name" | "artist">> {}

const Author: FC<AuthorProps> = ({ name, artist }) => {
  return (
    <Grid container direction="column" className={styles.author}>
      <div>{name}</div>
      <div className={styles.author__artist}>{artist}</div>
    </Grid>
  );
};

export default Author;
