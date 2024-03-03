import React from "react";
import css from "./SearchPage.module.css";
import { Link } from "react-router-dom";

export const SearchPage = () => {
  return (
    <div>
      <h2 className={css.title}>What are you looking for?</h2>
      <div className={css.list}>
        <Link to="/search/track">
          <div className={css.box}>
            <img
              src="../../../public/img/photosong.png"
              width={260}
              height={260}
            />
            <p className={css.text}> Track</p>
          </div>
        </Link>
        <Link to="/search/artist">
          <div className={css.boxSecond}>
            <img
              src="../../../public/img/photoartist.jpeg"
              alt=""
              width={400}
              height={250}
            />
            <p className={css.text}>Artist</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
