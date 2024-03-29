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
import { MyFavoriteArtists } from "../MyFavoriteArtists/MyFavoriteArtists";
import { Playlist } from "../Playlist/Playlist";
import { SearchPage } from "../../pages/SearchPage/SearchPage";
import { SearchBar } from "../SearchBar/SearchBar";
import { UserPage } from "../../pages/UserPage/UserPage";

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
              <Route path="my-playlists/:id" element={<Playlist />}></Route>
              <Route
                path="my-favorite-tracks"
                element={<MyFavoriteTracks />}
              ></Route>
              <Route
                path="my-favorite-artists"
                element={<MyFavoriteArtists />}
              ></Route>
            </Route>
            <Route path="search" element={<SearchPage />}></Route>
            <Route path="search/:name" element={<SearchBar />}></Route>
            <Route path="my-profile" element={<UserPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
