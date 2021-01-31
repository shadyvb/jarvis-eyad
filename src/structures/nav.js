import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/code">Code</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
