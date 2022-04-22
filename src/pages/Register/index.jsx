import { Container } from "../Register/register.style";
import React from "react";
import { MultiStep } from "./components/MultiStep";
import { Footer } from "../../components/Footer";
import { ShortHeader } from "../../components/ShortHeader";

export function Register() {
	return (
		<>
			<Container>
				<ShortHeader />
				<MultiStep />
			</Container>
			<Footer />
		</>
	);
}
