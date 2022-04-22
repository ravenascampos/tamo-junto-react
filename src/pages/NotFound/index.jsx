import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/images/not-found.png";
import { Button, Container, Title, Text, Img } from "./notFound.style";

export function NotFound() {
	return (
		<Container>
			<Title>Página não encontrada</Title>
			<Img src={notFound} alt="página não encontrada" />
			<Text>Volte para a página inicial:</Text>
			<Link to={"/"}>
				<Button>Home</Button>
			</Link>
		</Container>
	);
}
