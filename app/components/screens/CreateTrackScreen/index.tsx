import type { FC } from "react";
import { useState } from "react";

import { Button, Grid } from "@mui/material";

import StepComponentHOC from "@utils/hoc/StepComponentHOC";

import FirstStepCreate from "@screens/CreateTrackScreen/components/FirstStepCreate";
import SecondStepCreate from "@screens/CreateTrackScreen/components/SecondStepCreate";
import ThirdStepCreate from "@screens/CreateTrackScreen/components/ThirdStepCreate";

const CreateTrackScreen: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState<File>();
  const [audio, setAudio] = useState<File>();

  const changeStep = (value: -1 | 1) => () =>
    setActiveStep((prevState) => prevState + value);

  const COMPONENT_STEP = [
    <FirstStepCreate key={0} />,
    <SecondStepCreate setFile={setPicture} key={1} />,
    <ThirdStepCreate setFile={setAudio} key={2} />
  ];

  return (
    <>
      <StepComponentHOC activeStep={activeStep}>
        <h1>Шаг {activeStep + 1}</h1>

        {COMPONENT_STEP[activeStep]}
      </StepComponentHOC>

      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={changeStep(-1)}>
          Назад
        </Button>
        <Button disabled={activeStep === 2} onClick={changeStep(1)}>
          Вперед
        </Button>
      </Grid>
    </>
  );
};

export default CreateTrackScreen;
