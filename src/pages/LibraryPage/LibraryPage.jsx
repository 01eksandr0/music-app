import React from "react";
import css from "./LibraryPage.module.css";
import { LibraryHeader } from "../../components/LibraryHeader/LibraryHeader";
import { Outlet } from "react-router-dom";

export const LibraryPage = () => {
  return (
    <div>
      <LibraryHeader />
      <Outlet />
    </div>
  );
};
