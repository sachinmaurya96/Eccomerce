import React from "react";
import styled from "styled-components";

const FullSlider = () => {
  return (
    <Wrapper>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        {/* pagination */}
        <div class="swiper-pagination"></div>
        {/* next and prevv button */}
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        {/* scrollbar */}
        <div class="swiper-scrollbar"></div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default FullSlider;
