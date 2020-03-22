import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

// IIFE to create application DOM target
const el = "cdn-app";
(() => {
  const cdn = document.createElement("DIV");
  cdn.setAttribute("id", el);
  document.body.append(cdn);
})();

ReactDOM.render(<App />, document.querySelector(`#${el}`));
