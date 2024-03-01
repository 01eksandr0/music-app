import React from "react";
import { Link } from "react-router-dom";
import css from "./HomeHeroPlaylist.module.css";

export const HomeHeroPlaylist = ({ id, name }) => {
  return (
    <Link to={`/library/my-playlists/${id}`}>
      <div className={css.heroElement}>
        <div className={css.itemImgCont}>
          <div className={css.itemPlus}></div>
        </div>
        <p className={css.itemText}>{name}</p>
      </div>
    </Link>
  );
};
