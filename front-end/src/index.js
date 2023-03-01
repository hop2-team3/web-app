import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./pages/App"

import reportWebVitals from "./reportWebVitals";
import { Header } from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Header />
    <Home />
    <Footer />
=======
    <App />
>>>>>>> db3d63c34c6d2f9c2de970f73dcb12b665a40b93
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
