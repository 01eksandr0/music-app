import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../../pages/HomePage/HomePage";
import { LibraryPage } from "../../pages/LibraryPage/LibraryPage";

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="library" element={<LibraryPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
