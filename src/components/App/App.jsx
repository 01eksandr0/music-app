import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../../pages/HomePage/HomePage";
import { LibraryPage } from "../../pages/LibraryPage/LibraryPage";
import { ArtistInformationPage } from "../../pages/ArtistInformationPage/ArtistInformationPage";

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="musician/:id"
              element={<ArtistInformationPage />}
            ></Route>
            <Route path="library" element={<LibraryPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
