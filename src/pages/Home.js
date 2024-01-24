import React from "react";
import { StrictMode } from "react";

import Log, * as tools from "../js/tools.js";
import MyElement from "../index.js";
import "../css/app.css";
import "../css/styles.css";
import "../css/my-sass.scss";

const myElement2 = (
  <>
    <p>I am a paragraph s.</p>
    <p>I am a paragraph too bbbbb.</p>
  </>
);

Log("test");


const Home = () => {
  return (
  <><h1>Home</h1>{myElement2}</>
  )  ;
};

export default Home;