import React, { useEffect, useState } from "react";
import { ArtistTrackItem } from "../ArtistTrackItem/ArtistTrackItem";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesTracks } from "../../redux/selectors";
import { getTrackById } from "../../js/requsts";
import { openPlayer } from "../../redux/playerSlice";
import css from "./MyFavoriteTracks.module.css";

export const MyFavoriteTracks = () => {
  const list = useSelector(getFavoritesTracks);
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    const getArr = async () => {
      const arr = [];
      for (let i of list) {
        try {
          const response = await getTrackById(i);
          arr.push(response);
        } catch (error) {
          console.log(error);
        }
      }
      setTracks([...arr]);
    };
    getArr();
  }, []);

  const dispatch = useDispatch();

  const createPlayer = (id) => {
    dispatch(openPlayer(id));
  };
  return (
    <section>
      <div className={css.container}>
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
