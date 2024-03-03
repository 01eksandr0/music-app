import React, { useEffect, useState } from "react";
import css from "./ArtistInformationPage.module.css";
import { InfoArtistHero } from "../../components/InfoArtistHero/InfoArtistHero";
import { ArtistTracksList } from "../../components/ArtistTracksList/ArtistTracksList";

import { useParams } from "react-router-dom";
import { getArtistById, searchTrack } from "../../js/requsts";
import { Loader } from "../../components/Loader/Loader";

export const ArtistInformationPage = () => {
  const [info, setInfo] = useState({});
  const [tracks, setTracks] = useState([]);
  const params = useParams();
  useEffect(() => {
    const createInfoArtist = async () => {
      try {
        const response = await getArtistById(params.id);

        setInfo(response);
      } catch (error) {
        console.log(error);
      }
    };
    createInfoArtist();
  }, []);
  useEffect(() => {
    const getListTracks = async () => {
      try {
        const response = await searchTrack(info.name);

        setTracks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getListTracks();
  }, [info]);

  return (
    <div className={css.info}>
      {info.name ? (
        <InfoArtistHero
          id={params.id}
          name={info.name}
          src={info.picture_big}
          total={info.nb_fan}
        />
      ) : (
        <Loader />
      )}
      {tracks ? <ArtistTracksList tracks={tracks} /> : <Loader />}
    </div>
  );
};
