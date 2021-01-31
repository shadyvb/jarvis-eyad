import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteComponents from "../routes";

const App = () => (
  <Router>
    <Switch>{<RouteComponents />}</Switch>
  </Router>
);

export default App;
