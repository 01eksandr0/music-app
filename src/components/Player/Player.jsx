import React, { useEffect, useRef, useState } from "react";
import css from "./Player.module.css";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { getPlayer } from "../../redux/selectors";
import { getAudioNow } from "../../js/requsts";

export const Player = () => {
  const { id } = useSelector(getPlayer);
  const [audio, setAudio] = useState(false);
  const [url, setUrl] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    const getPlayer = async () => {
      const response = await getAudioNow(id);

      setUrl(response.preview_url);
    };
    getPlayer();
  }, []);
  useEffect(() => {
    const getPlayer = async () => {
      const response = await getAudioNow(id);

      setUrl(response.preview_url);
    };
    getPlayer();
  }, [id]);
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
  console.log(url);
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
        <audio id="ref" ref={audioRef} src={url}></audio>
      </div>
    </div>
  );
};
