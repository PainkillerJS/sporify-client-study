import type { FC } from "react";

import { VolumeUp } from "@mui/icons-material";

import GroupButtonsStart from "@ui/GroupButtonsStart";
import Author from "@ui/Author";
import TrackProgress from "@ui/TrackProgress";

import { useAppDispatch, useAppSelector } from "@hooks/redux";

import { pausePlayer, startPlayer } from "@services/player/slice";

import styles from "./audioPlayer.module.scss";

const AudioPlayer: FC = () => {
  const { active, currentTime, duration, pause, volume } = useAppSelector(
    (state) => state.player
  );
  const dispatch = useAppDispatch();

  const onPlayAudio = () => {
    dispatch(pause ? startPlayer() : pausePlayer());
  };

  return (
    <div className={styles.player}>
      <TrackProgress
        start={0}
        end={100}
        isShowNumbers={false}
        className={styles.player__rangeAudio}
      />

      <div className={styles.player__main}>
        <GroupButtonsStart isActive={!pause} onCallback={onPlayAudio} />

        <Author name={""} artist={""} />

        <VolumeUp className={styles.player__volume} />
        <TrackProgress start={0} end={100} />
      </div>
    </div>
  );
};

export default AudioPlayer;
