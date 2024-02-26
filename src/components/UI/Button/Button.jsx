import React from "react";
import css from "./Button.module.css";

export const Button = ({ children, onClick }) => {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
