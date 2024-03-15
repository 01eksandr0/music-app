import css from "./Header.module.css";
import { IoMusicalNoteSharp } from "react-icons/io5";
import { IoMusicalNotes } from "react-icons/io5";

export const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerContainer}>
          <a href="/" className={css.link}>
            <IoMusicalNoteSharp className={css.firstIcon} />
            <IoMusicalNotes className={css.secondIcon} />
          </a>
        </div>
      </div>
    </header>
  );
};
