import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";

type SliderComponentProps = {
  images: {
    src: string;
  }[];
};

const SliderComponent = ({ images }: SliderComponentProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={0}
      slidesPerView={1}
      loop
    >
      <SwiperSlide>
        <img src={images[0].src} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[1].src} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[2].src} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[3].src} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderComponent;
