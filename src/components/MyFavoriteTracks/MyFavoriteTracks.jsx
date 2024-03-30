import React, { useEffect, useState } from "react";
import { ArtistTrackItem } from "../ArtistTrackItem/ArtistTrackItem";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesTracks } from "../../redux/selectors";
import { getTrackById, searchTrack } from "../../js/requsts";
import { openPlayer } from "../../redux/playerSlice";
import css from "./MyFavoriteTracks.module.css";
import { Loader } from "../Loader/Loader";

export const MyFavoriteTracks = () => {
  const list = useSelector(getFavoritesTracks);
  const [tracks, setTracks] = useState([]);
  const [isLoader, setLoader] = useState(false);
  useEffect(() => {
    const getArr = async () => {
      const arr = [];
      setLoader(true);
      for (let i of list) {
        try {
          const response = await getTrackById(i);
          arr.push(response);
        } catch (error) {
          console.log(error);
        }
      }
      setLoader(false);
      setTracks([...arr]);
    };
    getArr();
  }, []);

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
    <section>
      <div className={css.container}>
        {isLoader && <Loader />}
        {tracks.length !== 0 && (
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
        )}
      </div>
    </section>
  );
};
