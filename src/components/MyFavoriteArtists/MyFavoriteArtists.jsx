import React, { useEffect, useState } from "react";
import css from "./MyFavoriteArtists.module.css";
import { useSelector } from "react-redux";
import { getFavoriteArtists } from "../../redux/selectors";
import { getArtistById } from "../../js/requsts";
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const MyFavoriteArtists = () => {
  const artists = useSelector(getFavoriteArtists);
  const [list, setList] = useState([]);
  const [isLoader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    const getMyArtist = async () => {
      try {
        const arr = [];
        for (let i of artists) {
          const response = await getArtistById(i);
          arr.push(response);
        }
        setList(arr);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    getMyArtist();
  }, [artists]);

  return (
    <section>
      <div className={css.container}>
        {isLoader && <Loader />}
        {list.length > 0 ? (
          <ul className={css.list}>
            {list.map((i) => (
              <li key={i.id}>
                <Link to={`/musician/${i.id}`}>
                  <div>
                    <img className={css.img} src={i.picture_big} alt={i.name} />
                    <p className={css.text}>{i.name}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className={css.text}>You don't have favorite artists.</p>
        )}
      </div>
    </section>
  );
};
