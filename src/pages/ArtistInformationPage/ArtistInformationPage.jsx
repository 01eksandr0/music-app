import React, { useEffect, useState } from "react";
import css from "./ArtistInformationPage.module.css";
import { InfoArtistHero } from "../../components/InfoArtistHero/InfoArtistHero";
import { ArtistTracksList } from "../../components/ArtistTracksList/ArtistTracksList";
import { getArtistInfo, getTopTrecksActor } from "../../js/requsts";
import { useParams } from "react-router-dom";

export const ArtistInformationPage = () => {
  const [info, setInfo] = useState({});
  const [tracks, setTracks] = useState([]);
  const params = useParams();
  useEffect(() => {
    const createArtist = async () => {
      try {
        const response = await getArtistInfo(params.id);
        setInfo(response);
      } catch (error) {
        console.log(error);
      }
    };
    createArtist();
    const createList = async () => {
      try {
        const response = await getTopTrecksActor(params.id);
        setTracks(response);
      } catch (error) {
        console.log(error);
      }
    };
    createList();
  }, []);
  return (
    <div className={css.info}>
      {info.name && (
        <InfoArtistHero
          name={info.name}
          src={info.images[0].url}
          total={info.followers.total}
        />
      )}
      {tracks && <ArtistTracksList tracks={tracks} />}
    </div>
  );
};
