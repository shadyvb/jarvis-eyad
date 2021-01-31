import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <h1>Hello Eyad!</h1>
    <h2>What do you want to do today?</h2>
    <Link to="/code">Code</Link>
  </>
);

Home.path = "/";
Home.exact = true;

export default Home;
