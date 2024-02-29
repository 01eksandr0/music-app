import React, { useEffect, useState } from "react";
import css from "./ArtistTrackItem.module.css";
import { RiHeart3Fill } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesTracks } from "../../redux/selectors";
import { addNewTrack, deleteTrack } from "../../redux/favoriteTracksSlice";
import clsx from "clsx";

export const ArtistTrackItem = ({ name, src, author, onClick, id }) => {
  const favorite = useSelector(getFavoritesTracks);
  const [isFavorit, setFavorite] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favorite.includes(id)) setFavorite(true);
    else setFavorite(false);
  }, [favorite]);

  const toggleFavoriteTrack = () => {
    if (isFavorit) dispatch(deleteTrack(id));
    else dispatch(addNewTrack(id));
  };
  const dinamicColor = clsx(css.icon, isFavorit && css.active);
  return (
    <div className={css.item} onClick={onClick}>
      <div className={css.imgCont}>
        <img height={50} width={50} src={src} alt={name} />
        <button type="button" onClick={toggleFavoriteTrack}>
          <RiHeart3Fill className={dinamicColor} size={20} />
        </button>
      </div>
      <p className={css.name}>
        {name} - <span>{author}</span>
      </p>
      <p className={css.time}>{"0:30"}</p>
      <button className={css.more} type="button">
        <IoMdMore size={20} color="rgb(250, 205, 102)" />
      </button>
    </div>
  );
};
