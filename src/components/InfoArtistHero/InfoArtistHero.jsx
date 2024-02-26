import React from "react";
import css from "./InfoArtistHero.module.css";
import { IoMdPlayCircle } from "react-icons/io";
import { RiHeart3Fill } from "react-icons/ri";
import { Button } from "../UI/Button/Button";

export const InfoArtistHero = ({ name, src, total }) => {
  return (
    <div className={css.hero}>
      <div className={css.imgCont}>
        <img className={css.img} src={src} alt={name} />
      </div>
      <div>
        <h2 className={css.name}>{name}</h2>
        <p className={css.listeners}>
          Listeners per month: <span className={css.number}>{total}</span>
        </p>
        <ul className={css.btnList}>
          <li>
            <Button>
              <IoMdPlayCircle color="rgb(250, 205, 102)" size={18} />
              Play all
            </Button>
          </li>
          <li>
            <Button>
              <RiHeart3Fill size={18} />
              Add to collection
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
