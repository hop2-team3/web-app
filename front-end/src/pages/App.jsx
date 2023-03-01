import React from "react";
<<<<<<< HEAD
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
=======
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
>>>>>>> db3d63c34c6d2f9c2de970f73dcb12b665a40b93
