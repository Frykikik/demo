import React from 'react';
import { StrictMode } from 'react';

import OxGame from "../js/oxGame.js";
const Blogs = () => {
  const myElement = (<><h1>Blog Articles</h1><StrictMode><OxGame /></StrictMode><hr /></>);
  return myElement;
};

export default Blogs;