import Image from "next/image";
import Link from "next/link";

import { Card, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

import GroupButtonsStart from "@ui/GroupButtonsStart";

import styles from "./trackItem.module.scss";

import type { FC, MouseEventHandler } from "react";
import type { TrackModel } from "@shared/model/track.model";
import Author from "@ui/Author";

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
        <GroupButtonsStart isActive={Boolean(isActive)} />

        <Image width={70} height={70} src={picture} alt="Картинка трека" />

        <Author artist={artist} name={name} />

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
