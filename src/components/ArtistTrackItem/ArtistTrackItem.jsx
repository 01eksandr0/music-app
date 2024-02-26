import React from "react";
import css from "./ArtistTrackItem.module.css";
import { RiHeart3Fill } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";

export const ArtistTrackItem = ({ name, src, author, onClick }) => {
  return (
    <div className={css.item} onClick={onClick}>
      <div className={css.imgCont}>
        <img height={50} width={50} src={src} alt={name} />
        <button type="button">
          <RiHeart3Fill size={20} fill="#fff" />
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
