import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";

const SliderComponent = () => {
  const images = [
    { url: "/images/image-product-1.jpg" },
    { url: "/images/image-product-2.jpg" },
    { url: "/images/image-product-3.jpg" },
    { url: "/images/image-product-4.jpg" },
  ];

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={0}
      slidesPerView={1}
      loop
    >
      <SwiperSlide>
        <img src={images[0].url} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[1].url} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[2].url} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[3].url} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderComponent;
