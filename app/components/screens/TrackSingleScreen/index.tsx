import Link from "next/link";
import Image from "next/image";

import { Button, Grid, TextField } from "@mui/material";

import styles from "./trackSingleScreen.module.scss";

import type { FC } from "react";

const TrackSingle: FC = () => {
  return (
    <div className={styles.single}>
      <Link href="/tracks">
        <Button variant="outlined" className={styles.single__tracks}>
          К списку
        </Button>
      </Link>

      <Grid container className={styles.single__info}>
        <Image src={""} alt="Обложка трека" width={200} height={200} />
        <div className={styles.single__data}>
          <h3>Название трека - </h3>
          <h3>Исполнитель - </h3>
          <h3>Прослушиваний - </h3>
        </div>
      </Grid>

      <h2>Слова к треку: </h2>
      <p></p>

      <h2>Комментарии: </h2>
      <Grid container className={styles.single__comments}>
        <TextField label="Ваше имя" fullWidth />
        <TextField label="Комментарий" fullWidth multiline rows={4} />
        <Button variant="outlined">Отправить</Button>
      </Grid>

      <div></div>
    </div>
  );
};

export default TrackSingle;
