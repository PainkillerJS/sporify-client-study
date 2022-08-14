import type { FC } from "react";

import styles from "./trackProgress.module.scss";

interface TrackProgressProps {
  start: number;
  end: number;
  isShowNumbers?: boolean;
  className?: string;
}

const TrackProgress: FC<TrackProgressProps> = ({
  end,
  start,
  isShowNumbers,
  className
}) => {
  return (
    <div className={`${styles.trackProgress} ${className} || ''}`}>
      <input type="range" min={start} max={end} value={start} />

      {isShowNumbers && (
        <div className={styles.trackProgress__numbers}>
          {start} / {end}
        </div>
      )}
    </div>
  );
};

TrackProgress.defaultProps = {
  isShowNumbers: true
};

export default TrackProgress;
