import React, { useState } from "react";
import css from "./Auth.module.css";
import clsx from "clsx";
import { FormReg } from "../FormReg/FormReg";
import { FormCreateUser } from "../FormCreateUser/FormCreateUser";

export const Auth = () => {
  const [flip, setFlip] = useState(false);
  const [btnGo, setBtnGo] = useState(true);
  const [btnReg, setBtnReg] = useState(false);
  const [isForm1, setForm1] = useState(true);
  const [isForm2, setForm2] = useState(false);
  const style = clsx(css.formContainer, flip && css.isActive);
  const dinamicStyle = clsx(css.btn, css.active);
  const openFormReg = () => {
    setFlip(true);
    setBtnGo(false);
    setBtnReg(true);
    setTimeout(() => {
      setForm1(false);
      setForm2(true);
    }, 300);
  };
  const openFormGo = () => {
    setFlip(false);
    setBtnGo(true);
    setBtnReg(false);
    setTimeout(() => {
      setForm1(true);
      setForm2(false);
    }, 300);
  };
  return (
    <div className={css.formPage}>
      <div className={css.pageContent}>
        <ul className={css.listBtn}>
          <li>
            <button
              className={isForm1 ? dinamicStyle : css.btn}
              onClick={openFormGo}
            >
              Log In
            </button>
          </li>
          <li>
            <button
              className={isForm2 ? dinamicStyle : css.btn}
              onClick={openFormReg}
            >
              Register
            </button>
          </li>
        </ul>
        <div className={style}>
          {isForm1 && <FormReg />}
          {isForm2 && <FormCreateUser />}
        </div>
      </div>
    </div>
  );
};
