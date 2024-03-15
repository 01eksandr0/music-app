import css from "./ArtistTracksList.module.css";
import { ArtistTrackItem } from "../ArtistTrackItem/ArtistTrackItem";
import { useDispatch } from "react-redux";
import { openPlayer } from "../../redux/playerSlice";
import { getTrackById, searchTrack } from "../../js/requsts";

export const ArtistTracksList = ({ tracks }) => {
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
      <ul className={css.list}>
        {tracks.map((item) => (
          <li key={item.id} onClick={() => createPlayer(item.id)}>
            <ArtistTrackItem
              id={item.id}
              name={item.title}
              src={item.album.cover_big}
              author={item.artist.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
