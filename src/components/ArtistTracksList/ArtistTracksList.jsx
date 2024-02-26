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
        {tracks.map((item, i) => (
          <li key={i} onClick={() => createPlayer(item.id)}>
            <ArtistTrackItem
              name={item.name}
              src={item.album.images[0].url}
              author={item.artists[0].name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
