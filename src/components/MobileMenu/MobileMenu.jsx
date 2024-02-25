import React from "react";
import css from "./MobileMenu.module.css";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdLibraryMusic } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import clsx from "clsx";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const MobileMenu = ({ closeMenu }) => {
  return (
    <div className={css.backdrop}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink to="/" className={buildLinkClass} onClick={closeMenu}>
              <AiFillHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/library"
              className={buildLinkClass}
              onClick={closeMenu}
            >
              <MdLibraryMusic />
              My collections
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={buildLinkClass}
              onClick={closeMenu}
            >
              <FaSearch />
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-profile"
              className={buildLinkClass}
              onClick={closeMenu}
            >
              <FaUserAlt /> Profile
            </NavLink>
          </li>
          <li>
            <button className={css.closeBtn} onClick={closeMenu}>
              <IoCloseCircleSharp /> Close
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
