import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";

import Favicon from "react-favicon";
import Logo from "./assets/logo.png";

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={Logo} />
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
