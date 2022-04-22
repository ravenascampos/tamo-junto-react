import { createContext, useEffect, useState } from "react";
import {
	cards,
	themes,
	testimonial,
	faq,
	businessType, 
	members
} from "../services/helpers";

export const AppContext = createContext();

export function AppProvider({ children }) {
	const [cardsList, setCardsList] = useState([]);
	const [themesList, setThemesList] = useState([]);
	const [testimonialList, setTestimonialList] = useState([]);
	const [faqList, setFaqList] = useState([]);
	const [businessList, setBusinessList] = useState([]);
	const [membersList, setMembersList] = useState([])

	async function loadCards() {
		try {
			setCardsList(cards);
		} catch (error) {
			setCardsList(null);
		}
	}

	async function loadThemes() {
		try {
			setThemesList(themes);
		} catch (error) {
			setThemesList(null);
		}
	}

	async function loadTestimonial() {
		try {
			setTestimonialList(testimonial);
		} catch (error) {
			setTestimonialList(null);
		}
	}

	async function loadFaq() {
		try {
			setFaqList(faq);
		} catch (error) {
			setFaqList(null);
		}
	}

	async function loadBusiness() {
		try {
			setBusinessList(businessType);
		} catch (error) {
			setBusinessList(null);
		}
	}

	async function loadMembers() {
		try {
			setMembersList(members);
		} catch (error) {
			setMembersList(null);
		}
	}

	useEffect(() => {
		loadCards();
		loadThemes();
		loadTestimonial();
		loadFaq();
		loadBusiness();
		loadMembers();
	}, []);

	return (
		<AppContext.Provider
			value={{
				cardsList,
				themesList,
				testimonialList,
				faqList,
				businessList,
				membersList
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
