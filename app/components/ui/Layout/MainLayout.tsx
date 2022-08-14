import { Container } from "@mui/material";

import NavBar from "@ui/NavBar";

import styles from "./layout.module.scss";

import type { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container className={styles.container}>{children}</Container>
    </>
  );
};

export default MainLayout;
