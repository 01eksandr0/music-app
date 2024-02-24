import React from "react";

export const Navigation = () => {
  return (
    <nav>
      <a href="/" className={css.link}>
        <IoMusicalNoteSharp className={css.firstIcon} />
        <IoMusicalNotes className={css.secondIcon} />
      </a>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};
