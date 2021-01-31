import React from "react";
import { Route } from "react-router-dom";
import Home from "./home";
import Code from "./code";
import AppBreadcrumb from "../structures/breadcrump";

const routes = [Home, Code];

export default () =>
  routes.map((Component) => (
    <Route
      key={Component.path}
      path={Component.path}
      exact={Component.exact || false}
    >
      <AppBreadcrumb Component={Component} />
      <Component />
    </Route>
  ));
