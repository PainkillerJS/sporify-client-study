import { Button } from "@mui/material";

import type { FileUploadProps } from "@ui/FileUpload";
import FileUpload from "@ui/FileUpload";

import type { FC } from "react";

interface SecondStepCreateProps extends Pick<FileUploadProps, "setFile"> {}

const SecondStepCreate: FC<SecondStepCreateProps> = ({ setFile }) => {
  return (
    <FileUpload setFile={setFile} accept="image/*">
      <Button>Загрузить обложку</Button>
    </FileUpload>
  );
};

export default SecondStepCreate;
