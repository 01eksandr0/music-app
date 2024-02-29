import React from "react";
import css from "./MyCollection.module.css";
import { FaHeart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

export const MyCollection = () => {
  return (
    <section>
      <div className={css.container}>
        <div className={css.tracks}>
          <FaHeart className={css.heart} />
          <p className={css.text}>My favorites tracks</p>
        </div>
        <div className={css.tracks}>
          <FaPeopleGroup className={css.heart} />
          <p className={css.text}>My favorites artists</p>
        </div>
      </div>
    </section>
  );
};
