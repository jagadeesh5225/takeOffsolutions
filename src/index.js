import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainApp from "./MainApp";
import {
  BrowserRouter,
  Route,
  Routes,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider
      router={createBrowserRouter([{ path: "/", element: <MainApp /> }])}
      // fallbackElement={<LoadingOutlined color="#023595" />}
    /> */}
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={<MainApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
