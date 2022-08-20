import type { ChangeEventHandler, FC } from "react";
import { useEffect } from "react";

import { VolumeUp } from "@mui/icons-material";

import GroupButtonsStart from "@ui/GroupButtonsStart";
import Author from "@ui/Author";
import TrackProgress from "@ui/TrackProgress";

import { useAppDispatch, useAppSelector } from "@hooks/redux";

import {
  pausePlayer,
  setCurrentTime,
  setDuration,
  setVolume,
  startPlayer
} from "@services/player/slice";

import styles from "./audioPlayer.module.scss";

let audio: HTMLAudioElement;

const AudioPlayer: FC = () => {
  const { active, currentTime, duration, pause, volume } = useAppSelector(
    (state) => state.player
  );
  const dispatch = useAppDispatch();

  const onPlayAudio = () => {
    if (pause) {
      dispatch(startPlayer());
      audio.play();
    } else {
      dispatch(pausePlayer());
      audio.pause();
    }
  };

  const onChangeVolume: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentVolume = Number(event.target.value);

    audio.volume = currentVolume / 100;
    dispatch(setVolume(currentVolume));
  };

  const onChangeCurrentTime: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTime = Number(event.target.value);

    audio.currentTime = currentTime;
    dispatch(setCurrentTime(currentTime));
  };

  const setAudio = () => {
    if (audio && active) {
      audio.src = active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        dispatch(setDuration(Math.ceil(audio.duration)));
      };
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(Math.ceil(audio.currentTime)));
      };
    }
  };

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      onPlayAudio();
    }
  }, [active]);

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <TrackProgress
        start={currentTime}
        end={duration}
        isShowNumbers={false}
        className={styles.player__rangeAudio}
        onChange={onChangeCurrentTime}
      />

      <div className={styles.player__main}>
        <GroupButtonsStart isActive={!pause} onCallback={onPlayAudio} />

        <Author name={active?.name} artist={active?.artist} />

        <VolumeUp className={styles.player__volume} />
        <TrackProgress start={volume} end={100} onChange={onChangeVolume} />
      </div>
    </div>
  );
};

export default AudioPlayer;
