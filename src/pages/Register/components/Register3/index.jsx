import React from "react";
import { Content, Title } from "../../register.style";
import { FormStep3 } from "../FormStep3";

export function Register3({ activeStep, steps, handleNext}) {
	return (
		<Content>
			<Title>
        Para te ajudar a encontrar outros empreendedores próximos, por favor
        informe o endereço do seu negócio.
			</Title>
			<FormStep3
				handleNext={handleNext}
				activeStep={activeStep}
				steps={steps}
				
			/>
			
		</Content>
	);
}
