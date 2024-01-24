import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./js/router.js";
import { StrictMode } from "react";

import Log, * as tools from "./js/tools.js";

import "./css/app.css";
import "./css/styles.css";
import "./css/my-sass.scss";

const myElement2 = (
  <>
    <p>I am a paragraph s.</p>
    <p>I am a paragraph too bbbbb.</p>
  </>
);

Log("test");

const MyElement = (
  <>
   
    <tools.Car2 color="red" />
    <hr />
    <tools.TestUseRef />
    <tools.ElementUseRef />
    <tools.PreviousInputValueUseRef />
    <tools.MovingDot />
    <StrictMode>
      <tools.ClockApp />
    </StrictMode>
    <StrictMode>
      <tools.TaskApp />
    </StrictMode>
    <hr />
    <tools.MyForm />
    <tools.Do />
    <tools.TodoCount />
    <hr />
    <StrictMode>
      <tools.OxGame />
    </StrictMode>
    <hr />
    <tools.MySelectForm />
    <hr />
    <tools.DoThing />
    <hr />
    <tools.ShowProduct />
    <hr />
    {myElement2}
    <tools.FavoriteColor />
    <hr />
    <tools.AccordionExpandIcon />
    <hr />
    <tools.Football />
    <tools.Img />
    <hr />
    <tools.Timer />
    <tools.OnceCounter />
    <tools.Counter />
    <tools.Context />
    <tools.ToggleTheme />
    <hr />
    <tools.CounterRdr />
    <tools.ReducForm />
    <tools.DataFetching />
    <hr />
    <tools.AxiosGet />
    <hr />
    <tools.GetData />
    <hr />
  </>
);

export default MyElement;

const containert = document.getElementById("roott");
const container = document.getElementById("root");
const container2 = document.getElementById("roota");
const container3 = document.getElementById("rootb");
const container4 = document.getElementById("rootc");

const headerContainert = document.getElementById("headerNav");

const headerNav = ReactDOM.createRoot(headerContainert);
headerNav.render(<Router />);

const roott = ReactDOM.createRoot(container);
roott.render(MyElement);

// const root = ReactDOM.createRoot(container);
// root.render(myElement6);

// const root2 = ReactDOM.createRoot(container2);
// root2.render(myElement5);

// const root3 = ReactDOM.createRoot(container3);
// root3.render(myElement3);

// const root4 = ReactDOM.createRoot(container4);
// root4.render(myElement7);
