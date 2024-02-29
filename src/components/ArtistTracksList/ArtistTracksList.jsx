import React from "react";
import css from "./ArtistTracksList.module.css";
import { ArtistTrackItem } from "../ArtistTrackItem/ArtistTrackItem";
import { useDispatch } from "react-redux";
import { openPlayer } from "../../redux/playerSlice";

export const ArtistTracksList = ({ tracks }) => {
  const dispatch = useDispatch();

  const createPlayer = (id) => {
    dispatch(openPlayer(id));
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
