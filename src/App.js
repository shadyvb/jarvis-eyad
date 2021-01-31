import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routeComponents from "./routes";
import Nav from "./structures/nav";
import "./styles.css";

const App = () => (
  <Router>
    <Nav />
    <Switch>{routeComponents}</Switch>
  </Router>
);

export default App;
