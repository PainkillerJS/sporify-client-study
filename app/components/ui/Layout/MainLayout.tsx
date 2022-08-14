import { Container } from "@mui/material";

import NavBar from "@ui/NavBar";
import AudioPlayer from "@ui/AudioPlayer";

import styles from "./layout.module.scss";

import type { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container className={styles.container}>{children}</Container>
      <AudioPlayer />
    </>
  );
};

export default MainLayout;
