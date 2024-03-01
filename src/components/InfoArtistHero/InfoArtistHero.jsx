import React, { useEffect, useState } from "react";
import css from "./InfoArtistHero.module.css";
import { IoMdPlayCircle } from "react-icons/io";
import { RiHeart3Fill } from "react-icons/ri";
import { Button } from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteArtists } from "../../redux/selectors";
import { addNewArtist, deleteArtist } from "../../redux/favoriteArtistsSlice";

export const InfoArtistHero = ({ name, src, total, id }) => {
  const authors = useSelector(getFavoriteArtists);
  const dispatch = useDispatch();
  const [isArray, setArray] = useState(false);
  useEffect(() => {
    if (authors.includes(id)) setArray(true);
    else setArray(false);
  }, [authors]);

  const toggleArtists = () => {
    if (isArray) dispatch(deleteArtist(id));
    else dispatch(addNewArtist(id));
  };

  const dinamicStyle = isArray ? "red" : "#fff";
  return (
    <div className={css.hero}>
      <div className={css.imgCont}>
        <img className={css.img} src={src} alt={name} />
      </div>
      <div>
        <h2 className={css.name}>{name}</h2>
        <p className={css.listeners}>
          Listeners per month: <span className={css.number}>{total}</span>
        </p>
        <ul className={css.btnList}>
          <li>
            <Button>
              <IoMdPlayCircle color="rgb(250, 205, 102)" size={18} />
              Play all
            </Button>
          </li>
          <li>
            <Button onClick={toggleArtists}>
              <RiHeart3Fill size={18} fill={dinamicStyle} />
              Add to collection
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
