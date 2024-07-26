import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./routes/RootLayout";
import Dashboard from "./routes/Dashboard";
import Work from "./routes/Work";
import Coding from "./routes/Coding";
import Music from "./routes/Music";
import Tennis from "./routes/Tennis";
import Authentication from "./routes/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/work", element: <Work /> },
      { path: "/coding", element: <Coding /> },
      { path: "/music", element: <Music /> },
      { path: "/tennis", element: <Tennis /> },
      { path: "/auth", element: <Authentication /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
