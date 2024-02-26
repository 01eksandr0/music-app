import React from "react";
import css from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Player } from "../Player/Player";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Player />
      <Main>
        <Navigation />
        <Outlet />
      </Main>

      {/* <div>Mobail-menu</div> */}
    </div>
  );
};
