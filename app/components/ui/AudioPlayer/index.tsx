import type { FC } from "react";
import { useState } from "react";

import { VolumeUp } from "@mui/icons-material";

import GroupButtonsStart from "@ui/GroupButtonsStart";
import Author from "@ui/Author";
import TrackProgress from "@ui/TrackProgress";

import styles from "./audioPlayer.module.scss";

const AudioPlayer: FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.player}>
      <TrackProgress
        start={0}
        end={100}
        isShowNumbers={false}
        className={styles.player__rangeAudio}
      />

      <div className={styles.player__main}>
        <GroupButtonsStart isActive={isActive} />

        <Author name={""} artist={""} />

        <VolumeUp className={styles.player__volume} />
        <TrackProgress start={0} end={100} />
      </div>
    </div>
  );
};

export default AudioPlayer;
