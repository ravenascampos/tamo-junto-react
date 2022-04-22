import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { Register1 } from "../Register1";
import { Register2 } from "../Register2";
import { Register3 } from "../Register3";
import { Container } from "./multiStep.styled";


export function MultiStep() {
	const [activeStep, setActiveStep] = useState(0);
	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

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
			return (
				<Register1
					handleNext={handleNextStep}
					activeStep={activeStep}
					steps={steps}
				/>
			);
		case 1:
			return (
				<Register2
					handleNext={handleNextStep}
					activeStep={activeStep}
					steps={steps}
				/>
			);
		case 2:
			return (
				<Register3
					handleNext={handleNextStep}
					activeStep={activeStep}
					steps={steps}
					openModal={openModal}
					handleOpenModal={handleOpenModal}
					handleCloseModal={handleCloseModal}
				/>
			);
		default:
			return "Uncknown Step";
		}
	}

	return (
		<Container>
			<Stepper activeStep={activeStep}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<>
				{activeStep === steps.length ? (
					<div>Cadastro realizado com sucesso</div>
				) : (
					<>{getStepsContent(activeStep)}</>
				)}
			</>
		</Container>
	);
}
