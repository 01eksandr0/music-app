import React from "react";
import css from "./CreatePlaylist.module.css";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { closeCreatePlayer } from "../../redux/createPlayerSlice";
import { createNewPlaylist } from "../../redux/playListsSlice";

export const CreatePlaylist = () => {
  const dispatch = useDispatch();

  const closeModal = () => dispatch(closeCreatePlayer());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.playlist.value.trim() !== "") {
      dispatch(createNewPlaylist(e.target.playlist.value.trim()));
      dispatch(closeCreatePlayer());
    }
  };
  return (
    <div className={css.backdrop}>
      <div className={css.content}>
        <button className={css.btnClose} onClick={closeModal}>
          <IoCloseCircle size={20} color="#fff" />
          Close
        </button>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label}>
            Create a playlist name
            <input
              name="playlist"
              className={css.input}
              type="text"
              placeholder="My playlist..."
            />
          </label>
          <button className={css.btn} type="submit">
            Create playlist
          </button>
        </form>
      </div>
    </div>
  );
};
