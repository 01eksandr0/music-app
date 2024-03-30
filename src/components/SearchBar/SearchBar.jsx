import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import css from "./SearchBar.module.css";
import { getTrackById, searchTrack } from "../../js/requsts";
import { ArtistTrackItem } from "../ArtistTrackItem/ArtistTrackItem";
import { useDispatch } from "react-redux";
import { openPlayer } from "../../redux/playerSlice";
import { RecomendArtists } from "../RecomendArtists/RecomendArtists";

export const SearchBar = () => {
  const params = useParams();
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!value) return;

    if (params.name === "track") {
      const getTracks = async () => {
        try {
          const response = await searchTrack(value);
          setList(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getTracks();
    } else {
      const getArtist = async () => {
        try {
          const response = await searchTrack(value);
          setList([response.data[0].artist]);
        } catch (error) {}
      };
      getArtist();
    }
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(e.target.query.value.trim());
  };

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
    <div>
      <div>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="query"
            placeholder="Search"
          />
          <button className={css.btn}>
            <IoSearchSharp className={css.icon} />
          </button>
        </form>
      </div>
      {list.length !== 0 && (
        <ul className={css.list}>
          {list.map((item) => (
            <li key={item.id}>
              {params.name === "artist" ? (
                <Link to={`/musician/${item.id}`}>
                  <div>
                    <img
                      className={css.img}
                      src={item.picture_big}
                      alt={item.name}
                    />
                    <p className={css.text}>{item.name}</p>
                  </div>
                </Link>
              ) : (
                <div onClick={() => createPlayer(item.id)}>
                  <ArtistTrackItem
                    id={item.id}
                    name={item.title}
                    src={item.album.cover_big}
                    author={item.artist.name}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
