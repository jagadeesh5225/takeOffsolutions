import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppMobile from "./AppMobile";
import {BrowserRouter,   Routes as Switch,Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     {/* <BrowserRouter basename={"/"}>
     <Switch>
        <Route path='/' component=/>
        </Switch>
    </BrowserRouter> */}

    {window.innerWidth < 500 ? <AppMobile /> : <App />} 
  </React.StrictMode>
);
