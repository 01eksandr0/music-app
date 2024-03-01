import React from "react";
import css from "./MyPlaylists.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openCreatePlayer } from "../../redux/createPlayerSlice";
import { getPlaylists } from "../../redux/selectors";
import { Link } from "react-router-dom";

export const MyPlaylists = () => {
  const dispatch = useDispatch();
  const openModal = () => dispatch(openCreatePlayer());
  const list = useSelector(getPlaylists);
  return (
    <section>
      <div className={css.container}>
        {list.length === 0 ? (
          <p className={css.text}>You don't have playlists.</p>
        ) : (
          <ul className={css.list}>
            {list.map((i) => (
              <li key={i.id}>
                <Link to={`/library/my-playlists/${i.id}`}>
                  <div className={css.item}>
                    <p className={css.textItem}>{i.name}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <button className={css.btn} onClick={openModal}>
          Create new playlist
        </button>
      </div>
    </section>
  );
};
