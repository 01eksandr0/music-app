import React from "react";
import { Swiper } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const width = parseInt(getComputedStyle(document.querySelector("body")).width);
let myWidth = 0;
let quantity = 0;
let between = 0;
if (width < 500) {
  myWidth = 300;
  quantity = 2.5;
  between = 60;
} else if (width < 1000) {
  myWidth = 450;
  quantity = 3.5;
  between = 60;
} else if (width < 1280) {
  myWidth = 950;
  quantity = 6.5;
  between = 60;
} else {
  myWidth = 1100;
  quantity = 7;
  between = 60;
}
export const MySwiper = ({ children }) => {
  return (
    <Swiper
      slidesPerView={quantity}
      spaceBetween={between}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      style={{ width: myWidth, height: 190 }}
    >
      {children}
    </Swiper>
  );
};
