import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppMobile from "./AppMobile";
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <BrowserRouter basename={"/"}>
    {window.innerWidth < 500 ? <AppMobile /> : <App />} 
    </BrowserRouter>

  </React.StrictMode>
);
