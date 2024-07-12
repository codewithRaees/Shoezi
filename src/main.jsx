import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "../components/Error.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Location from "../components/Location.jsx";
import Home from "../components/Home.jsx";
import Hero from "../components/Hero.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "home",
        element: <Hero />,
      },
      {
        path: "location",
        element: <Location />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
