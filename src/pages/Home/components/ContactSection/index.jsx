import React from "react";
import { FormsHome } from "../FormsHome";
import { Container, Title, Wrapper, Content } from "./contactSection.style";
import contact from "../../../../assets/images/contact.png";

export function ContactSection() {
	return (
		<Container>
			<Title>
        Tem alguma dúvida ou quer falar com a gente? Então envie uma mensagem 😉
			</Title>
			<Content>
				<FormsHome />
			</Content>
			<Wrapper>
				<img src={contact} />
			</Wrapper>
		</Container>
	);
}
