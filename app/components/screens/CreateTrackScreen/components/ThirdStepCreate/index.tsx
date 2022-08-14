import { Button } from "@mui/material";

import type { FileUploadProps } from "@ui/FileUpload";
import FileUpload from "@ui/FileUpload";

import type { FC } from "react";

interface ThirdStepCreateProps extends Pick<FileUploadProps, "setFile"> {}

const ThirdStepCreate: FC<ThirdStepCreateProps> = ({ setFile }) => {
  return (
    <div>
      <FileUpload setFile={setFile} accept="audio/*">
        <Button>Загрузить трек</Button>
      </FileUpload>
    </div>
  );
};

export default ThirdStepCreate;
