import { Container } from "@mui/material";

import styles from "./layout.module.scss";

import type { FC, PropsWithChildren } from "react";
import NavBar from "@ui/NavBar";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container className={styles.container}>{children}</Container>
    </>
  );
};

export default MainLayout;
