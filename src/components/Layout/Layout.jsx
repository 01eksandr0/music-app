import React, { useEffect } from "react";
import css from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Player } from "../Player/Player";
import { useSelector } from "react-redux";
import { getInfo, getPlayer } from "../../redux/selectors";
import { MoreInfoAbouteTracke } from "../MoreInfoAbouteTracke/MoreInfoAbouteTracke";

export const Layout = () => {
  const player = useSelector(getPlayer);
  const info = useSelector(getInfo);
  return (
    <div>
      <Header />
      {player.player.status && <Player />}
      {info.status && <MoreInfoAbouteTracke />}
      <Main>
        <Navigation />
        <Outlet />
      </Main>
    </div>
  );
};
