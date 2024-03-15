import tracks from "../../DATA/tracks.json";
import { SwiperSlide } from "swiper/react";
import css from "./RecomendTracks.module.css";
import { MySwiper } from "../Swiper/Swiper";
import { RecomendTrackItem } from "../RecomendTrackItem/RecomendTrackItem";
import { useDispatch } from "react-redux";
import { openPlayer } from "../../redux/playerSlice";
import { getTrackById, searchTrack } from "../../js/requsts";

export const RecomendTracks = () => {
  const dispatch = useDispatch();

  const createPlayer = async (id) => {
    try {
      const { artist } = await getTrackById(id);
      const { data } = await searchTrack(artist.name);
      const arrayIds = [...new Set([parseInt(id), ...data.map((i) => i.id)])];
      dispatch(openPlayer(arrayIds));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Recommended tracks.</h2>
      {tracks.length > 0 && (
        <MySwiper>
          {tracks.map((track) => (
            <SwiperSlide key={track.id} onClick={() => createPlayer(track.id)}>
              <RecomendTrackItem
                src={track.img}
                id={track.id}
                name={track.name}
              />
            </SwiperSlide>
          ))}
        </MySwiper>
      )}
    </div>
  );
};
