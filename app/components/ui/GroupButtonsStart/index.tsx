import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";

import type { FC, MouseEventHandler } from "react";

interface GroupButtonsStart {
  isActive: boolean;
  onCallback?: () => void;
}

const GroupButtonsStart: FC<GroupButtonsStart> = ({ isActive, onCallback }) => {
  const handleStopPropagation: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.stopPropagation();
    onCallback?.();
  };

  return (
    <IconButton onClick={handleStopPropagation}>
      {isActive ? <Pause /> : <PlayArrow />}
    </IconButton>
  );
};

export default GroupButtonsStart;
