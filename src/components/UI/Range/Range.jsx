import React, { useState } from "react";
import css from "./Range.module.css";

export const Range = ({ time, changeTime }) => {
  const handleChange = (e) => {
    changeTime(parseInt(e.target.value));
  };
  return (
    <div className={css.middle}>
      <div className={css.sliderCont}>
        <span className={css.bar}>
          <span className={css.fill} style={{ width: `${time}%` }}></span>
        </span>
        <input
          className={css.slider}
          type="range"
          min={0}
          max={100}
          value={time}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
