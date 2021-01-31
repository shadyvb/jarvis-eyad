import React from "react";
import { Route } from "react-router-dom";
import Home from "./home";
import Code from "./code";
import { Page } from "react-onsenui";
import AppToolbar from "../structures/toolbar";

const routes = [Home, Code];

export default () =>
  routes.map((Component) => (
    <Route
      key={Component.path}
      path={Component.path}
      exact={Component.exact || false}
    >
      <Page renderToolbar={() => <AppToolbar />}>
        <Component />
      </Page>
    </Route>
  ));
