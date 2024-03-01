import React from "react";
import css from "./HomeHero.module.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPlaylists } from "../../redux/selectors";
import { HomeHeroAdd } from "../HomeHeroAdd/HomeHeroAdd";
import { HomeHeroPlaylist } from "../HomeHeroPlaylist/HomeHeroPlaylist";

export const HomeHero = () => {
  const playlists = useSelector(getPlaylists);
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
            {playlists[0] ? (
              <HomeHeroPlaylist id={playlists[0].id} name={playlists[0].name} />
            ) : (
              <HomeHeroAdd />
            )}
          </li>
          <li>
            {playlists[1] ? (
              <HomeHeroPlaylist id={playlists[1].id} name={playlists[1].name} />
            ) : (
              <HomeHeroAdd />
            )}
          </li>
          <li>
            {playlists[2] ? (
              <HomeHeroPlaylist id={playlists[2].id} name={playlists[2].name} />
            ) : (
              <HomeHeroAdd />
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};
