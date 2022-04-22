import React, { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
	Card,
	Container,
	SwiperWrapper,
	Content,
} from "./swiperTestimonial.style";

export function SwiperTestimonial() {
	const { testimonialList } = useContext(AppContext);

	return (
		<Container>
			<SwiperWrapper>
				<Swiper
					slidesPerView={1}
					spaceBetween={5}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{testimonialList.map((testimonial, i) => (
						<SwiperSlide key={i}>
							<Content>
								<Card
									style={{
										backgroundImage: `url(${testimonial.img})`,
									}}
								>
									<h5>{testimonial.name} </h5>
									<h6>{testimonial.title}</h6>

									<p>
										<span>&ldquo;</span>
										{testimonial.text}
									</p>
								</Card>
							</Content>
						</SwiperSlide>
					))}
				</Swiper>
			</SwiperWrapper>
		</Container>
	);
}
