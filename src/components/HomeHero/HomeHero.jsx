import React from "react";
import css from "./HomeHero.module.css";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const HomeHero = () => {
  return (
    <section className={css.hero}>
      <div className={css.heroContainer}>
        <div className={css.imgCont}>
          <img
            className={css.backImg}
            src="https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg?w=1024"
            alt=""
          />
          <p className={css.title}>Music is my life</p>
        </div>
        <ul className={css.list}>
          <li>
            <Link to="/library/my-favorite-tracks">
              <div className={css.heroElement}>
                <div className={css.itemImgCont}>
                  <div className={css.itemImg}>
                    <FaHeart className={css.icon} />
                  </div>
                </div>
                <p className={css.itemText}>My favorite</p>
              </div>
            </Link>
          </li>
          <li>
            <div className={css.heroElement}>
              <div className={css.itemImgCont}>
                <div className={css.itemPlus}>
                  <FaPlus className={css.icon} />
                </div>
              </div>
              <p className={css.itemText}>Add playlist</p>
            </div>
          </li>
          <li>
            <div className={css.heroElement}>
              <div className={css.itemImgCont}>
                <div className={css.itemPlus}>
                  <FaPlus className={css.icon} />
                </div>
              </div>
              <p className={css.itemText}>Add playlist</p>
            </div>
          </li>
          <li>
            <div className={css.heroElement}>
              <div className={css.itemImgCont}>
                <div className={css.itemPlus}>
                  <FaPlus className={css.icon} />
                </div>
              </div>
              <p className={css.itemText}>Add playlist</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
