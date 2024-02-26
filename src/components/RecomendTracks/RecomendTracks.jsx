import React, { useEffect, useState } from "react";

import { SwiperSlide } from "swiper/react";
import css from "./RecomendTracks.module.css";
import { getRecomendTracks } from "../../js/requsts";
import { MySwiper } from "../Swiper/Swiper";
import { RecomendTrackItem } from "../RecomendTrackItem/RecomendTrackItem";
import { useDispatch } from "react-redux";
import { openPlayer } from "../../redux/playerSlice";

export const RecomendTracks = () => {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    const getTracks = async () => {
      try {
        const response = await getRecomendTracks();
        setTracks(response);
      } catch (error) {
        console.log(error);
      }
    };
    getTracks();
  }, []);
  const dispatch = useDispatch();

  const createPlayer = (id) => {
    dispatch(openPlayer(id));
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Recommended tracks.</h2>
      <MySwiper>
        {tracks.map((track) => (
          <SwiperSlide key={track.id} onClick={() => createPlayer(track.id)}>
            <RecomendTrackItem
              src={track.album.images[0].url}
              id={track.id}
              name={track.name}
            />
          </SwiperSlide>
        ))}
      </MySwiper>
    </div>
  );
};
