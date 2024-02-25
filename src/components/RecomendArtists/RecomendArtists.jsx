import React, { useEffect, useState } from "react";

import { SwiperSlide } from "swiper/react";
import css from "./RecomendArtists.module.css";

import { MySwiper } from "../Swiper/Swiper";
import { RecomendTrackItem } from "../RecomendTrackItem/RecomendTrackItem";
import { getRecomendArtists } from "../../js/requsts";

export const RecomendArtists = () => {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    const getTracks = async () => {
      try {
        const response = await getRecomendArtists();
        setArtists(response);
      } catch (error) {
        console.log(error);
      }
    };
    getTracks();
  }, []);
  return (
    <div className={css.container}>
      <h2 className={css.title}>Recommended artists.</h2>
      <MySwiper>
        {artists.map((track) => (
          <SwiperSlide key={track.id}>
            <RecomendTrackItem
              src={track.images[0].url}
              id={track.id}
              name={track.name}
            />
          </SwiperSlide>
        ))}
      </MySwiper>
    </div>
  );
};
