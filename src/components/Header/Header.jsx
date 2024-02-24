import React from "react";
import css from "./Header.module.css";
import { IoMusicalNoteSharp } from "react-icons/io5";
import { IoMusicalNotes } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";

const headerContainer = "container " + css.headerContainer;

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={headerContainer}>
        <form className={css.form}>
          <button type="submit" className={css.formBtn}>
            <IoSearch size={17} color="rgba(255, 255, 255, 0.25)" />
          </button>
          <input type="text" className={css.input} placeholder="Search" />
        </form>
        <h1> I LOVE YOU</h1>
        <button type="button" className={css.btn}>
          <HiMenuAlt4 size={24} color="#fff" />
        </button>
      </div>
    </header>
  );
};
