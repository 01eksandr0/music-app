import React from "react";
import css from "./ArtistTracksList.module.css";
import { ArtistTrackItem } from "../ArtistTrackItem/ArtistTrackItem";

export const ArtistTracksList = ({ tracks }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {tracks.map((item, i) => (
          <li key={i}>
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
