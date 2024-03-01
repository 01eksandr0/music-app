import React, { useEffect, useState } from "react";
import css from "./MoreInfoAbouteTracke.module.css";
import { Link } from "react-router-dom";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { FaPerson } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesTracks, getInfo } from "../../redux/selectors";
import { closeInfo, openInfo } from "../../redux/moreInfoSlice";
import { getTrackById } from "../../js/requsts";
import { addNewTrack, deleteTrack } from "../../redux/favoriteTracksSlice";
import { openChoce } from "../../redux/chocePlaylistSlice";

export const MoreInfoAbouteTracke = () => {
  const { id } = useSelector(getInfo);
  const list = useSelector(getFavoritesTracks);
  const [isFavorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  const [info, setInfo] = useState({});
  useEffect(() => {
    const getInfo = async () => {
      const response = await getTrackById(id);
      setInfo(response);
    };
    getInfo();
    if (list.includes(id)) setFavorite(true);
  }, []);
  useEffect(() => {
    if (list.includes(id)) setFavorite(true);
    else setFavorite(false);
  }, [list]);
  const closeModal = () => {
    dispatch(closeInfo());
  };
  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteTrack(id));
    } else dispatch(addNewTrack(id));
  };
  const choceIdPlaylist = () => {
    dispatch(openChoce(id));
  };
  return (
    <div className={css.container}>
      {info.album && (
        <div className={css.info}>
          <button type="button" className={css.btn} onClick={closeModal}>
            <IoCloseCircleSharp size={24} color="#fff" />
            Close
          </button>
          <img width={200} height={200} src={info.album.cover_big} alt="" />
          <ul className={css.list}>
            <li>
              <button
                type="button"
                className={css.btn}
                onClick={toggleFavorite}
              >
                <span className={css.backIcon}>
                  <FaHeart size={8} color="rgba(255,255,255,0.5)" />
                </span>
                {isFavorite ? "Delete from favorite" : "Add to my favorite"}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.btn}
                onClick={choceIdPlaylist}
              >
                <IoMdAddCircle size={24} color="rgb(250, 205, 102)" />
                Add to playlist
              </button>
            </li>
            <li>
              <Link
                to={`musician/${info.artist.id}`}
                className={css.btn}
                onClick={() => dispatch(closeInfo())}
              >
                <FaPerson size={24} color="rgb(250, 205, 102)" />
                Go to author
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
