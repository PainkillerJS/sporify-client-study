import { Grid, TextField } from "@mui/material";

import styles from "./firstStepCreate.module.scss";

import type { FC } from "react";

const FirstStepCreate: FC = () => {
  return (
    <Grid container direction="column" className={styles.firstStep}>
      <TextField label="Название трека" />
      <TextField label="Имя исполнителя" />
      <TextField label="Слова к треку" multiline rows={3} />
    </Grid>
  );
};

export default FirstStepCreate;
