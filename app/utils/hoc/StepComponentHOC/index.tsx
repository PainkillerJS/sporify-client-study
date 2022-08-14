import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material";

import styles from "./stepComponentHOC.module.scss";

import type { FC, PropsWithChildren } from "react";

interface StepComponentHOCProps {
  activeStep: number;
}

const STEPS = ["Информация о треке", "Загрузка обложки", "Загрузить сам трек"];

const StepComponentHOC: FC<PropsWithChildren<StepComponentHOCProps>> = ({
  activeStep,
  children
}) => {
  return (
    <Container className={styles.step}>
      <Stepper activeStep={activeStep}>
        {STEPS.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Grid container justifyContent="center" className={styles.step__content}>
        <Card>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepComponentHOC;
