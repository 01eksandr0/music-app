import React from "react";
import css from "./MyCollection.module.css";
import { FaHeart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const MyCollection = () => {
  return (
    <section>
      <div className={css.container}>
        <Link to="/library/my-favorite-tracks">
          <div className={css.tracks}>
            <FaHeart className={css.heart} />
            <p className={css.text}>My favorites tracks</p>
          </div>
        </Link>
        <Link to="/library/my-favorite-artists">
          <div className={css.tracks}>
            <FaPeopleGroup className={css.heart} />
            <p className={css.text}>My favorites artists</p>
          </div>
        </Link>
      </div>
    </section>
  );
};
