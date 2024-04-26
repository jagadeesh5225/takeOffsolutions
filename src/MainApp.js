import React from "react";
import AppMobile from "./AppMobile";
import App from "./App";

const MainApp = () => {
  return <div>{window.innerWidth < 500 ? <AppMobile /> : <App />} </div>;
};

export default MainApp;
