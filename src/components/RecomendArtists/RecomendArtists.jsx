import { SwiperSlide } from "swiper/react";
import css from "./RecomendArtists.module.css";
import artists from "../../DATA/artists.json";
import { MySwiper } from "../Swiper/Swiper";
import { RecomendTrackItem } from "../RecomendTrackItem/RecomendTrackItem";
import { Link } from "react-router-dom";

export const RecomendArtists = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Recommended artists.</h2>
      {artists.length > 0 && (
        <MySwiper>
          {artists.map((artist) => (
            <SwiperSlide key={artist.id}>
              <Link to={`musician/${artist.id}`}>
                <RecomendTrackItem
                  src={artist.img}
                  id={artist.id}
                  name={artist.name}
                />
              </Link>
            </SwiperSlide>
          ))}
        </MySwiper>
      )}
    </div>
  );
};
