import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import AllAplications from "./components/AllAplications";
import AppDetails from "./components/AppDetails";
import Installation from "./components/Installation";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/all-aplications", element: <AllAplications /> },
      { path: "/app/:id", element: <AppDetails /> },
      { path: "/installation", element: <Installation /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
