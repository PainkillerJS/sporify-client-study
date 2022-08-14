import type {
  ChangeEventHandler,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction
} from "react";
import { useRef } from "react";

import styles from "./fileUpload.module.scss";

export interface FileUploadProps {
  setFile: Dispatch<SetStateAction<File | undefined>>;
  accept: string;
}

const FileUpload: FC<PropsWithChildren<FileUploadProps>> = ({
  setFile,
  accept,
  children
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickInput = () => inputRef.current?.click();

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) =>
    setFile(event.currentTarget.files?.[0]);
  return (
    <div className={styles.fileUpload} onClick={handleClickInput}>
      <input
        type="file"
        accept={accept}
        className={styles.fileUpload__input}
        ref={inputRef}
        onChange={handleChangeInput}
      />
      {children}
    </div>
  );
};

export default FileUpload;
