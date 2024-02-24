import React from "react";
import css from "./Main.module.css";

export const Main = ({ children }) => {
  return (
    <main className={css.main}>
      <div className="container">
        <div className={css.mainContainer}>{children}</div>
      </div>
    </main>
  );
};
