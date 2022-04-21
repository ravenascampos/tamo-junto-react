import React from "react";
import { AccordionFaq } from "../AccordionFaq";
import { Container, Wrapper, Title, Accordion } from "./faq.style";
import phoneFaq from "../../../../assets/images/phones-faq.png";

export function Faq() {
  return (
    <Container id="faq">
      <Title>Perguntas Frequentes</Title>
      <Accordion>
        <AccordionFaq />
      </Accordion>
      <Wrapper>
        <img src={phoneFaq} />
      </Wrapper>
    </Container>
  );
}
