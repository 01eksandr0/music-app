import React from "react";
import css from "./MyPlaylists.module.css";

export const MyPlaylists = () => {
  return (
    <section>
      <div className={css.container}>
        {true ? (
          <p className={css.text}>You don't have playlists.</p>
        ) : (
          <ul></ul>
        )}
        <button className={css.btn}>Create new playlist</button>
      </div>
    </section>
  );
};
