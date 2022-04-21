import React from "react";
import { ContactSection } from "./components/ContactSection";
import { DownloadNow } from "./components/DownloadNow";
import { Faq } from "./components/Faq";
import { HomeDescription } from "./components/HomeDescription";
import { Purpose } from "./components/Purpose";
import { SwiperPurpose } from "./components/SwiperPurpose";
import { SwiperTestimonial } from "./components/SwiperTestimonial";
import { SwiperThemes } from "./components/SwiperThemes";

export default function Home() {
  return (
    <>
      <HomeDescription />
      <SwiperPurpose />
      <Purpose />
      <SwiperThemes />
      <SwiperTestimonial />
      <Faq />
      <DownloadNow />
      <ContactSection />
    </>
  );
}
