import React from "react";
import css from "./HomeHero.module.css";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export const HomeHero = () => {
  return (
    <section className={css.hero}>
      <div className={css.heroContainer}>
        <div>
          <img
            className={css.backImg}
            src="https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg?w=1024"
            alt=""
          />
        </div>
        <ul className={css.list}>
          <li>
            <div className={css.heroElement}>
              <div className={css.itemImgCont}>
                <div className={css.itemImg}>
                  <FaHeart className={css.icon} />
                </div>
              </div>
              <p className={css.itemText}>My favorite</p>
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
