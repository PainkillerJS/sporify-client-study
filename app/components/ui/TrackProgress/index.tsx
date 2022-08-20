import type { ChangeEventHandler, FC } from "react";

import styles from "./trackProgress.module.scss";

interface TrackProgressProps {
  start: number;
  end: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  isShowNumbers?: boolean;
  className?: string;
}

const TrackProgress: FC<TrackProgressProps> = ({
  end,
  start,
  isShowNumbers,
  className,
  onChange
}) => {
  return (
    <div className={`${styles.trackProgress} ${className} || ''}`}>
      <input type="range" min={0} max={end} value={start} onChange={onChange} />

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
