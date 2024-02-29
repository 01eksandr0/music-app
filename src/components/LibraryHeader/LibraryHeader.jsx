import React from "react";
import css from "./LibraryHeader.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export const LibraryHeader = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <header>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink to="/library" className={buildLinkClass}>
              My collection
            </NavLink>
          </li>
          <li>
            <NavLink to="my-playlists" className={buildLinkClass}>
              My playlists
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
