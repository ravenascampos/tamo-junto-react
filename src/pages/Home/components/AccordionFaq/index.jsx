import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import { CgCheckO } from "react-icons/cg";
import { Container, Title } from "./accordionFaq.style";
import { FiChevronDown } from "react-icons/fi";

export function AccordionFaq() {
	const { faqList } = useContext(AppContext);

	return (
		<Container>
			{faqList.map((faq, i) => (
				<Accordion key={i}>
					<AccordionSummary
						expandIcon={<FiChevronDown className="icon" />}
						aria-controls={faq.ariaControls}
						id={faq.id}
					>
						<Title>
							<span>
								<CgCheckO />
							</span>
							<h5>{faq.title}</h5>
						</Title>
					</AccordionSummary>
					<AccordionDetails>
						<p>{faq.text}</p>
					</AccordionDetails>
				</Accordion>
			))}
		</Container>
	);
}
