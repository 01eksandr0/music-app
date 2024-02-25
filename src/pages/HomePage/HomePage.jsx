import React from "react";
import css from "./HomePage.module.css";
import { RecomendTracks } from "../../components/RecomendTracks/RecomendTracks";
import { HomeHero } from "../../components/HomeHero/HomeHero";

export const HomePage = () => {
  return (
    <div className={css.home}>
      <HomeHero />
      <RecomendTracks />
    </div>
  );
};
