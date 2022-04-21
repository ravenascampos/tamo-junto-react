import { createContext, useEffect, useState } from "react";
import { cards, themes, testimonial, faq } from "./objects";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cardsList, setCardsList] = useState([]);
  const [themesList, setThemesList] = useState([]);
  const [testimonialList, setTestimonialList] = useState([]);
  const [faqList, setFaqList] = useState([]);

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

  useEffect(() => {
    loadCards();
    loadThemes();
    loadTestimonial();
    loadFaq();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cardsList,
        themesList,
        testimonialList,
        faqList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
