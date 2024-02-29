import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../../pages/HomePage/HomePage";
import { LibraryPage } from "../../pages/LibraryPage/LibraryPage";
import { ArtistInformationPage } from "../../pages/ArtistInformationPage/ArtistInformationPage";
import { MyCollection } from "../MyCollection/MyCollection";
import { MyPlaylists } from "../MyPlaylists/MyPlaylists";
import { MyFavoriteTracks } from "../MyFavoriteTracks/MyFavoriteTracks";

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route
              path="musician/:id"
              element={<ArtistInformationPage />}
            ></Route>
            <Route path="library" element={<LibraryPage />}>
              <Route index element={<MyCollection />}></Route>
              <Route path="my-playlists" element={<MyPlaylists />}></Route>
              <Route
                path="my-favorite-tracks"
                element={<MyFavoriteTracks />}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
