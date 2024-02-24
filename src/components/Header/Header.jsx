import React, { useState } from "react";
import css from "./Header.module.css";
import { IoMusicalNoteSharp } from "react-icons/io5";
import { IoMusicalNotes } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Header = () => {
  const [isModal, setModal] = useState(false);

  const openMobailMenu = () => setModal(true);
  const closeMobailMenu = () => setModal(false);

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerContainer}>
          <a href="/" className={css.link}>
            <IoMusicalNoteSharp className={css.firstIcon} />
            <IoMusicalNotes className={css.secondIcon} />
          </a>
          <button type="button" onClick={openMobailMenu} className={css.btn}>
            <HiMenuAlt4 size={24} color="#fff" />
          </button>
        </div>
        {isModal && <MobileMenu closeMenu={closeMobailMenu} />}
      </div>
    </header>
  );
};
