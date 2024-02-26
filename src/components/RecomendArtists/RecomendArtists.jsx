import React, { useEffect, useState } from "react";

import { SwiperSlide } from "swiper/react";
import css from "./RecomendArtists.module.css";

import { MySwiper } from "../Swiper/Swiper";
import { RecomendTrackItem } from "../RecomendTrackItem/RecomendTrackItem";
import { getRecomendArtists } from "../../js/requsts";
import { Link } from "react-router-dom";

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
        {artists.map((artist) => (
          <SwiperSlide key={artist.id}>
            <Link to={`musician/${artist.id}`}>
              <RecomendTrackItem
                src={artist.images[0].url}
                id={artist.id}
                name={artist.name}
              />
            </Link>
          </SwiperSlide>
        ))}
      </MySwiper>
    </div>
  );
};
