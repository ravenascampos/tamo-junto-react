import React from "react";
import { Content, Title } from "../../register.style";
import FormStep1 from "../FormStep1";

export default function Register1() {
  return (
    <Content>
      <Title>
        Boas vindas! Informe seus dados abaixo para fazermos o seu cadastro.
      </Title>
      <FormStep1 />
    </Content>
  );
}
