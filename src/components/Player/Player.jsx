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
  const [track, setTrack] = useState({});
  const audioRef = useRef(null);

  useEffect(() => {
    const getPlayer = async () => {
      const response = await getAudioNow(id);
      setTrack(response);
      setTimeout(() => {
        audioRef.current.play();
        setAudio(true);
      }, 200);
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

  return (
    <div className={css.backdrop}>
      {track.name && (
        <div className={css.playerCont}>
          <div className={css.imgCont}>
            <img
              src={track.album.images[0].url}
              alt=""
              width={70}
              height={70}
            />
            <div>
              <p className={css.track}>{track.name}</p>
              <p className={css.name}>{track.artists[0].name}</p>
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
          <audio id="ref" ref={audioRef} src={track.preview_url}></audio>
        </div>
      )}
    </div>
  );
};
