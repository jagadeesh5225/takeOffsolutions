import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppMobile from "./AppMobile";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" Component={window.innerWidth < 500 ? <AppMobile /> : <App />}  />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
