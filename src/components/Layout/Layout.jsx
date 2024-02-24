import React from "react";
import css from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Navigation />
        <Outlet />
      </Main>

      {/* <div>Mobail-menu</div> */}
    </div>
  );
};
