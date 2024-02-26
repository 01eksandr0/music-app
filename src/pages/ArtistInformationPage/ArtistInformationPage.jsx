import React from "react";
import css from "./ArtistInformationPage.module.css";
import { InfoArtistHero } from "../../components/InfoArtistHero/InfoArtistHero";

export const ArtistInformationPage = () => {
  return (
    <div className={css.info}>
      <InfoArtistHero />
    </div>
  );
};
