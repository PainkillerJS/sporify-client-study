import NavBar from "@ui/NavBar/NavBar";

import styles from "./mainScreen.module.scss";

import type { FC } from "react";

const MainScreen: FC = () => {
  return (
    <>
      <NavBar />
      <div className={styles.main}>
        <h1>Добро пожаловать</h1>
        <h3>Здесь собраны лучшие треки!</h3>
      </div>
    </>
  );
};

export default MainScreen;
