import React from "react";
import css from "./RecomendTrackItem.module.css";

export const RecomendTrackItem = ({ src, name, id }) => {
  return (
    <div>
      <div className={css.item}>
        <img className={css.img} src={src} alt={name} />
      </div>
      <p className={css.text}> {name}</p>
    </div>
  );
};
