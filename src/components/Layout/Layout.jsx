import React, { useEffect } from "react";
import css from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Player } from "../Player/Player";
import { useSelector } from "react-redux";
import { getPlayer } from "../../redux/selectors";

export const Layout = () => {
  const player = useSelector(getPlayer);
  return (
    <div>
      <Header />
      {player.player.status && <Player />}
      <Main>
        <Navigation />
        <Outlet />
      </Main>
    </div>
  );
};
