import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Products } from "./Products";
import { Services } from "./Services";
import { Login } from "./Login";
import { GetAccess } from "./GetAccess";
import { Home } from "./Home";
import { Footer } from "../components/Footer";
import { Contact } from "./Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/GetAccess",
    element: <GetAccess />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
