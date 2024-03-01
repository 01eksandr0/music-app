import React from "react";
import css from "./HomeHeroAdd.module.css";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { openCreatePlayer } from "../../redux/createPlayerSlice";

export const HomeHeroAdd = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={css.heroElement}
      onClick={() => dispatch(openCreatePlayer())}
    >
      <div className={css.itemImgCont}>
        <div className={css.itemPlus}>
          <FaPlus className={css.icon} />
        </div>
      </div>
      <p className={css.itemText}>Add playlist</p>
    </div>
  );
};
