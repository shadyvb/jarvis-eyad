import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <h1>Hello Eyad!</h1>
    <h2>What do you want to do today?</h2>
    <ul>
      <li>
        <Link to="/code">Code</Link>
      </li>
    </ul>
  </>
);

Home.path = "/";
Home.exact = true;

export default Home;
