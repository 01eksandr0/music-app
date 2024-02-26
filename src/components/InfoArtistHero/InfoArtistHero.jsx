import React from "react";
import css from "./InfoArtistHero.module.css";
import { IoMdPlayCircle } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { Button } from "../UI/Button/Button";

export const InfoArtistHero = () => {
  return (
    <div className={css.hero}>
      <div className={css.imgCont}>
        <img
          className={css.img}
          src="https://variety.com/wp-content/uploads/2023/03/lady-gaga-2022.jpg?w=1000"
          alt=""
        />
      </div>
      <div>
        <h2 className={css.name}>Lady Gaga</h2>
        <p className={css.listeners}>
          Listeners per month: <span className={css.number}>1233131</span>
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
              <FaRegHeart size={18} />
              Add to collection
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
