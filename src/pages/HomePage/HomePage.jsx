import React from "react";
import css from "./HomePage.module.css";
import { RecomendTracks } from "../../components/RecomendTracks/RecomendTracks";
import { HomeHero } from "../../components/HomeHero/HomeHero";
import { getRecomendTracks } from "../../js/requsts";
import { RecomendArtists } from "../../components/RecomendArtists/RecomendArtists";

export const HomePage = () => {
  getRecomendTracks();
  return (
    <div className={css.home}>
      <HomeHero />
      <RecomendTracks />
      <RecomendArtists />
    </div>
  );
};
