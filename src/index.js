import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainApp from "./MainApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <BrowserRouter basename="/">
    <Routes>
      <Route path="/" Component={<MainApp />} />
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);
