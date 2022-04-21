import React from "react";
import { Content, Title } from "../../register.style";
import { FormStep1 } from "../FormStep1";

export function Register1({ activeStep, steps, handleNext }) {
  return (
    <Content>
      <Title>
        Boas vindas! Informe seus dados abaixo para fazermos o seu cadastro.
      </Title>
      <FormStep1
        handleNext={handleNext}
        activeStep={activeStep}
        steps={steps}
      />
    </Content>
  );
}
