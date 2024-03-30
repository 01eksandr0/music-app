import React, { useEffect, useState } from "react";
import css from "./Playlist.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylists } from "../../redux/selectors";
import { getTrackById, searchTrack } from "../../js/requsts";
import { openPlayer } from "../../redux/playerSlice";
import { ArtistTrackItem } from "../ArtistTrackItem/ArtistTrackItem";

export const Playlist = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const playlists = useSelector(getPlaylists);
  const index = playlists.findIndex((i) => i.id === params.id);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const arr = [];
      try {
        for (let i of playlists[index].list) {
          const response = await getTrackById(i);
          arr.push(response);
        }
        setTracks(arr);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);
  const createPlayer = async (id) => {
    try {
      const { artist } = await getTrackById(id);
      const { data } = await searchTrack(artist.name);
      const arrayIds = [...new Set([parseInt(id), ...data.map((i) => i.id)])];
      dispatch(openPlayer(arrayIds));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <div className={css.container}>
        <h2 className={css.title}>{playlists[index].name}</h2>
        {tracks.length !== 0 ? (
          <ul className={css.list}>
            {tracks.map((item) => (
              <li key={item.id} onClick={() => createPlayer(item.id)}>
                <ArtistTrackItem
                  id={item.id}
                  name={item.title}
                  src={item.album.cover_big}
                  author={item.artist.name}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className={css.text}>This playlist don't have tracks</p>
        )}
      </div>
    </section>
  );
};
