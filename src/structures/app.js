import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toolbar from "./toolbar";
import * as routes from "../routes";

const App = () => (
  <Router>
    <Toolbar />
    <Switch>
      {Object.values(routes).map((Component) => (
        <Route component={Component} {...(Component?.route || {})} />
      ))}
    </Switch>
  </Router>
);

export default App;
