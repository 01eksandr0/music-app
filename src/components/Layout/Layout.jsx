import React, { useEffect } from "react";
import css from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Player } from "../Player/Player";
import { useSelector } from "react-redux";
import {
  getChoce,
  getCreatePlayer,
  getInfo,
  getPlayer,
} from "../../redux/selectors";
import { MoreInfoAbouteTracke } from "../MoreInfoAbouteTracke/MoreInfoAbouteTracke";
import { CreatePlaylist } from "../CreatePlaylist/CreatePlaylist";
import { AddToPlaylist } from "../AddToPlaylist/AddToPlaylist";

export const Layout = () => {
  const player = useSelector(getPlayer);
  const info = useSelector(getInfo);
  const createPlaylist = useSelector(getCreatePlayer);
  const choce = useSelector(getChoce);
  return (
    <div>
      <Header />
      {player.player.status && <Player />}
      {info.status && <MoreInfoAbouteTracke />}
      {createPlaylist && <CreatePlaylist />}
      {choce.status && <AddToPlaylist />}
      <Main>
        <Navigation />
        <Outlet />
      </Main>
    </div>
  );
};
