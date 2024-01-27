import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Autoplay} from 'swiper/modules';

const FullSlider = () => {
  return (
    <Wrapper>
      <Swiper
        
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide><img src="/assets/slide1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slide2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slide3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slide4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slide5.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slide6.png" alt="" /></SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
position: relative;
width: 100%;
.swiper-container{
  overflow-x: hidden;
}
  .swiper {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.swiper-slide {
  width: fit-content;
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
  overflow-x: hidden;
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
  overflow-x: hidden;
}


`
export default FullSlider
