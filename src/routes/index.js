import React from "react";
import { Route } from "react-router-dom";
import Home from "./home";
import Code from "./code";

const routes = [Home, Code];

export default routes.map((Component) => (
  <Route path={Component.path} exact={Component.exact || false}>
    <Component />
  </Route>
));
