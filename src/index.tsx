import React from "react";
import ReactDom from "react-dom";
import { App } from "./App";

import "./services/firebase";
import "./styles/global.scss";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
