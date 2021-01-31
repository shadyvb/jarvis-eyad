import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteComponents from "../routes";
import "../styles.css";

import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

const App = () => (
  <Router>
    <Switch>{<RouteComponents />}</Switch>
  </Router>
);

export default App;
