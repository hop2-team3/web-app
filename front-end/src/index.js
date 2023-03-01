import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { App } from "./pages/App";
// import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import {Header} from './components/Header'
import { Home } from "./pages/Home";
import { Footer } from "./pages/Footer";

import reportWebVitals from "./reportWebVitals";
import { Header } from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  //   <Header/>
  //   <Routes>
  //   <Route path='/' element={<App/>}/>
  //   </Routes>
  //   </BrowserRouter>

  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
