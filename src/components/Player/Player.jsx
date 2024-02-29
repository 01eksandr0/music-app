import React, { useEffect, useRef, useState } from "react";
import css from "./Player.module.css";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { FaPause } from "react-icons/fa6";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { getPlayer } from "../../redux/selectors";
import { getTrackById } from "../../js/requsts";
import { Range } from "../UI/Range/Range";
import { closePlayer, openPlayer } from "../../redux/playerSlice";
import { RangeMusic } from "../RangeMusic/RangeMusic";

export const Player = () => {
  const dispatch = useDispatch();
  const id = useSelector(getPlayer);
  const [audio, setAudio] = useState(false);
  const [track, setTrack] = useState({});
  const [time, setTime] = useState(0);
  const audioRef = useRef(null);
  audioRef.currentTime = time;

  useEffect(() => {
    const getTrack = async () => {
      const response = await getTrackById(id.player.id);
      setTrack(response);
      setAudio(true);
    };
    getTrack();
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
  const musicLine = () => {
    const { duration, currentTime } = audioRef.current;

    if (duration == currentTime) {
      dispatch(closePlayer());
    }
    setTime((currentTime / duration) * 100);
  };

  const changeTime = (time) => {
    audioRef.current.currentTime = time * 0.33;
  };

  const changeVolume = (volume) => {
    audioRef.current.volume = volume / 100;
  };
  const dynamicClass = clsx(css.play, audio && css.active);
  return (
    <div className={css.backdrop}>
      {track.title && (
        <div className={css.playerCont}>
          <div className={css.imgCont}>
            <img
              src={track.album.cover_big}
              alt={track.title}
              width={70}
              height={70}
            />
            <div>
              <p className={css.track}>{track.title}</p>
              <p className={css.name}>{track.artist.name}</p>
            </div>
          </div>
          <div className={css.range}>
            <div className={css.control}>
              <button type="button" className={css.btn}>
                <IoPlaySkipBackSharp size={25} className={css.next} />
              </button>
              <button type="button" className={dynamicClass} onClick={playA}>
                {audio ? (
                  <IoPlay size={20} color="#fff" />
                ) : (
                  <FaPause size={18} color="#fff" />
                )}
              </button>
              <button type="button" className={css.btn}>
                <IoPlaySkipForwardSharp size={25} className={css.next} />
              </button>
            </div>
            <Range time={time} audioRef={audioRef} changeTime={changeTime} />
          </div>
          <RangeMusic changeVolume={changeVolume} />
          <audio
            autoPlay
            id="ref"
            ref={audioRef}
            src={track.preview}
            onTimeUpdate={musicLine}
          ></audio>
        </div>
      )}
    </div>
  );
};
