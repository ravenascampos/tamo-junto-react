import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ShortHeader } from "../../components/ShortHeader";
import { Footer } from "../../components/Footer";
import {
  Container,
  Wrapper,
  Card,
  Img,
  Title,
  Subtitle,
  Box,
  TitleBox,
  TitleCard,
  Button,
} from "../ContactUs/contactUs.style";

export function ContactUs() {
  const { membersList } = useContext(AppContext);

  return (
    <>
      <ShortHeader />
      <Container>
        <Title>Conheça nossa equipe</Title>
        <Subtitle>
          A tamo<span>junto</span> é fruto de muito esforço, trabalho e
          dedicação dessas pessoas:
        </Subtitle>
        {membersList.map((member, i) => (
          <Wrapper key={i}>
            <TitleBox>{member.trail}</TitleBox>
            <Box>
              {member.itens?.map((item) => (
                <Card key={item.name}>
                  <Img src={item?.img} alt="" />
                  <TitleCard>{item?.name}</TitleCard>
                  <Button href={item?.linkedin}>Linkedin</Button>
                </Card>
              ))}
            </Box>
          </Wrapper>
        ))}
      </Container>
      <Footer />
    </>
  );
}
