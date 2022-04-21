import React, { useState } from "react";
import { Stepper, Step, StepLabel, Typography, Button } from "@mui/material";
import Register1 from "../Register1";
import Register2 from "../Register2";
import Register3 from "../Register3";

export default function MultiStep() {
  const [activeStep, setActiveStep] = useState(0);

  function getSteps() {
    return ["Passo 1", "Passo 2", "Passo 3"];
  }

  const handleNextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const steps = getSteps();

  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Register1 />;
      case 1:
        return <Register2 />;
      case 2:
        return <Register3 />;
      default:
        return "Uncknown Step";
    }
  }

  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          "Completed"
        ) : (
          <>
            {getStepsContent(activeStep)}
            <Button onClick={handleNextStep}>
              {activeStep === steps.length ? "Finish" : "Next"}
            </Button>
          </>
        )}
      </>
    </>
  );
}
