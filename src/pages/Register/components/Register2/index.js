import React from "react";
import { Content, Title } from "../../register.style";
import FormStep2 from "../FormStep2";

export default function Register2() {
  return (
    <Content>
      <Title>
        Agora, por favor insira os dados da sua empresa (você precisa ter um
        CNPJ ativo).
      </Title>
      <FormStep2 />
    </Content>
  );
}
