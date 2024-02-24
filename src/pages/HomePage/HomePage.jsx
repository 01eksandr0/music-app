import React from "react";
import css from "./HomePage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const HomePage = () => {
  return (
    <div className={css.home}>
      <section className={css.hero}>
        <div>
          {/*  */}
          <div style={{ display: "flex", gap: 20 }}>
            <img src="" alt="" width={686} height={373} />
            <ul style={{ display: "flex", gap: 38, flexDirection: "column" }}>
              <li>
                <img src="" alt="" width={417} height={96} />
              </li>
              <li>
                <img src="" alt="" width={417} height={96} />
              </li>
              <li>
                <img src="" alt="" width={417} height={96} />
              </li>
            </ul>
          </div>
          {/*  */}
          <Swiper
            slidesPerView={8}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            style={{ width: 1120, height: 100 }}
          >
            <SwiperSlide className={css.cart}>Slide 1</SwiperSlide>
            <SwiperSlide className={css.cart}>Slide 2</SwiperSlide>
            <SwiperSlide className={css.cart}>Slide 3</SwiperSlide>
            <SwiperSlide className={css.cart}>Slide 4</SwiperSlide>
            <SwiperSlide className={css.cart}>Slide 5</SwiperSlide>
            <SwiperSlide className={css.cart}>Slide 6</SwiperSlide>
            <SwiperSlide className={css.cart}>Slide 7</SwiperSlide>
            <SwiperSlide className={css.cart}>Slide 8</SwiperSlide>
            <SwiperSlide className={css.cart}>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};
