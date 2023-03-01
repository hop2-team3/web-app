import React from "react";
import { Header } from "../components/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Products } from "../components/Products";
import { Home } from "./Home";
import { Footer } from "./Footer";
import {Services} from "../components/Services"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/Services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
