import React, { useRef, useState } from "react";
import css from "./Player.module.css";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import clsx from "clsx";

export const Player = () => {
  const [audio, setAudio] = useState(false);
  const audioRef = useRef(null);
  const playA = () => {
    if (!audio) {
      setAudio(true);
      audioRef.current.play();
    } else {
      setAudio(false);
      audioRef.current.pause();
    }
  };
  const dynamicClass = clsx(css.play, audio && css.active);
  return (
    <div className={css.backdrop}>
      <div className={css.playerCont}>
        <div className={css.imgCont}>
          <img
            src="https://i.ytimg.com/vi/D4hAVemuQXY/maxresdefault.jpg"
            alt=""
            width={70}
            height={70}
          />
          <div>
            <p className={css.track}>To the moment</p>
            <p className={css.name}>Emenem</p>
          </div>
        </div>
        <div className={css.control}>
          <button type="button" className={css.btn}>
            <IoPlaySkipBackSharp size={25} className={css.next} />
          </button>
          <button type="button" className={css.btn} onClick={playA}>
            <FaCirclePlay size={35} className={dynamicClass} />
          </button>
          <button type="button" className={css.btn}>
            <IoPlaySkipForwardSharp size={25} className={css.next} />
          </button>
        </div>
        <input className={css.range} type="range" name="" id="" />
        <audio
          ref={audioRef}
          src="https://p.scdn.co/mp3-preview/d322f7dd5f0f197f2621cc2119a1146d1cf3f921?cid=5fcc5565997d4dc9a4b4238041447fdf"
        ></audio>
      </div>
    </div>
  );
};
