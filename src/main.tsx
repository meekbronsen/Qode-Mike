import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);
