import React from "react";
import css from "./AddToPlaylist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getChoce, getPlaylists } from "../../redux/selectors";
import { openCreatePlayer } from "../../redux/createPlayerSlice";
import { closeChoce } from "../../redux/chocePlaylistSlice";
import { IoCloseCircle } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { addNewTrackInPlaylist } from "../../redux/playListsSlice";

export const AddToPlaylist = () => {
  const list = useSelector(getPlaylists);
  const dispatch = useDispatch();
  const { id } = useSelector(getChoce);
  const add = (idTrack) => {
    dispatch(addNewTrackInPlaylist(idTrack, id));
    dispatch(closeChoce());
  };
  return (
    <div className={css.backdrop}>
      <div className={css.info}>
        <button className={css.btn} onClick={() => dispatch(closeChoce())}>
          <IoCloseCircle size={24} />
          Close
        </button>
        <ul>
          <li>
            <button
              className={css.btn}
              onClick={() => dispatch(openCreatePlayer())}
            >
              <FaCirclePlus />
              Create new playlist
            </button>
          </li>
          {list.map((i) => (
            <li key={i.id}>
              <button className={css.btn} onClick={() => add(i.id)}>
                <span className={css.playlistLogo}></span>
                <p>{i.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
