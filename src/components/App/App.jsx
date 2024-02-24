import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
