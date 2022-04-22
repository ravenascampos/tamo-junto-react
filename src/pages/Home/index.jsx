import React from "react";
import { Header } from "../../components/Header";
import { ContactSection } from "./components/ContactSection";
import { DownloadNow } from "./components/DownloadNow";
import { Faq } from "./components/Faq";
import { HomeDescription } from "./components/HomeDescription";
import { Purpose } from "./components/Purpose";
import { SwiperPurpose } from "./components/SwiperPurpose";
import { SwiperTestimonial } from "./components/SwiperTestimonial";
import { SwiperThemes } from "./components/SwiperThemes";
import { Footer } from "../../components/Footer";

export function Home() {
	return (
		<>
			<Header />
			<HomeDescription />
			<SwiperPurpose />
			<Purpose />
			<SwiperThemes />
			<SwiperTestimonial />
			<Faq />
			<DownloadNow />
			<ContactSection />
			<Footer />
		</>
	);
}
