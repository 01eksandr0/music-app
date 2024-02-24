import React from "react";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdLibraryMusic } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoMusicalNoteSharp, IoMusicalNotes } from "react-icons/io5";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  return (
    <nav className={css.nav}>
      <a href="/" className={css.linkLogo}>
        <IoMusicalNoteSharp className={css.firstIcon} />
        <IoMusicalNotes className={css.secondIcon} />
      </a>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={buildLinkClass}>
            <AiFillHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="/library" className={buildLinkClass}>
            <MdLibraryMusic />
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className={buildLinkClass}>
            <FaSearch />
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-profile" className={buildLinkClass}>
            <FaUserAlt />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
