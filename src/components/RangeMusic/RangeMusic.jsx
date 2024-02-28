import React, { useEffect, useState } from "react";
import css from "./RangeMusic.module.css";
import { IoVolumeMediumSharp } from "react-icons/io5";
import { IoVolumeMute } from "react-icons/io5";

export const RangeMusic = ({ changeVolume }) => {
  const [width, setWidth] = useState(50);
  useEffect(() => changeVolume(width), [width]);
  const handleChange = (e) => {
    setWidth(e.target.value);
  };
  const changeIcon = () => {
    if (width == 0) setWidth(50);
    else setWidth(0);
  };
  return (
    <div className={css.container}>
      <button className={css.btn} type="button" onClick={changeIcon}>
        {width != 0 ? (
          <IoVolumeMediumSharp size={24} color="#fff" />
        ) : (
          <IoVolumeMute size={24} color="#fff" />
        )}
      </button>
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
    </div>
  );
};
