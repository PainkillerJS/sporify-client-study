import type { FC } from "react";
import type { TrackModel } from "@shared/model/track.model";

interface TrackItemProps {
  track: TrackModel;
  isActive?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, isActive }) => {
  const { name } = track;

  return <div>{name}</div>;
};

TrackItem.defaultProps = {
  track: {} as TrackModel
};

export default TrackItem;
