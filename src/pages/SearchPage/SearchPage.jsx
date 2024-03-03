import React from "react";
import css from "./SearchPage.module.css";

export const SearchPage = () => {
  return (
    <div>
      <h2 className={css.title}>What are you looking for?</h2>
      <div className={css.list}>
        <div className={css.box}>
          <p>Track</p>
        </div>
        <div className={css.boxSecond}>
          <p>Artist</p>
        </div>
      </div>
    </div>
  );
};
