import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import { Container, Card, SwiperWrapper } from "./swiperPurpose.style";

export function SwiperPurpose() {
  const { cardsList } = useContext(AppContext);
  return (
    <Container id="purpose">
      <h2>
        A tamojunto é o lugar certo pra que você, que trabalha no ramo de
        alimentação, possa:
      </h2>
      <SwiperWrapper>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cardsList.map((card, i) => (
            <SwiperSlide key={i}>
              <Card>
                <img src={card.img} alt={card.title} />
                <span>{card.title} </span>
                <p>{card.text}</p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </Container>
  );
}
