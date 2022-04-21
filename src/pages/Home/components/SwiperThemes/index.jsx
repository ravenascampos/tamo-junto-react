import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";
import { CardThemes } from "../CardThemes";
import { SwiperWrapper } from "../SwiperPurpose/swiperPurpose.style";
import { Container } from "./swiperThemes.style";
import { Card } from "../CardThemes/cardThemes.style";

export function SwiperThemes() {
  const { themesList } = useContext(AppContext);

  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <Container id="community">
      <h2>O que rola na nossa comunidade:</h2>
      {isMobileOrTablet && (
        <SwiperWrapper>
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              375: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {themesList.map((theme, i) => (
              <SwiperSlide key={i}>
                <Card>
                  <img src={theme.img} alt={theme.title} />
                  <span>{theme.title} </span>
                  <p>{theme.text}</p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      )}
      {isDesktop && <CardThemes />}
    </Container>
  );
}
