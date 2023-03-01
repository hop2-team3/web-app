import React from "react";
import { Header } from "../components/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Products } from "../components/Products";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/components/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
