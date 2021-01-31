import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import App from "./structures/app";
import { StateContextProvider } from "./state";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </StrictMode>,
  rootElement
);
