import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ChatBot } from "./ChatBot";

// IIFE to create application DOM target
(() => {
  const kore = document.createElement("DIV");
  kore.setAttribute("id", "cb");
  document.body.append(kore);
})();

(() => ReactDOM.render(<ChatBot />, document.querySelector("#cb")))();
