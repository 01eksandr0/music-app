import React, { useState } from "react";
import css from "./Range.module.css";

export const Range = () => {
  const [width, setWidth] = useState("0");
  const handleChange = (e) => {
    setWidth(e.target.value);
  };
  return (
    <div className={css.middle}>
      <div className={css.sliderCont}>
        <span className={css.bar}>
          <span className={css.fill} style={{ width: `${width}%` }}></span>
        </span>
        <input
          className={css.slider}
          type="range"
          min={0}
          max={100}
          value={width}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
