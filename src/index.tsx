// ie11 Polyfill
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Chatbot } from "./Chatbot";

window.KORE_WEB_SDK_CONFIG = {
  baseURL: "https://bots.kore.ai",
  bot: {
    id: "st-8e675193-0f0d-526d-85c6-2de821aaea33",
    name: "Test",
  },
  client: {
    id: "",
    secret: "",
  },
  jwt:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTUxNjc3OTksImV4cCI6MTY5NjM4OTc5OSwiYXVkIjoiaHR0cHM6Ly9pZHAua29yZS5jb20vYXV0aG9yaXplIiwiaXNzIjoiY3MtNDZjMjBiY2QtMmI3YS01MDgwLWIwMDctYmZkZWU0MDlkOGU0Iiwic3ViIjoiODl0eWxlcmZzYWZkc2Fmc2QzMjQyMzQwOSIsImlzQW5vbnltb3VzIjp0cnVlfQ.yvj37o6MDqsMuOww-vjrYy5YBeXW-P6luHdqCZ6j8Z0",
  jwtURL: "https://bots.kore.ai",
};

// IIFE to create application DOM target
(() => {
  const kore = document.createElement("DIV");
  kore.setAttribute("id", "cb");
  document.body.append(kore);
})();

declare global {
  interface Window {
    KORE_WEB_SDK_CONFIG: KORE_WEB_SDK_CONFIG;
  }
}

export interface KORE_WEB_SDK_CONFIG {
  baseURL: string;
  jwtURL: string;
  jwt: string;
  bot: {
    id: string;
    name: string;
  };
  client: {
    id: string;
    secret: string;
  };
}

(() => ReactDOM.render(<Chatbot />, document.querySelector("#cb")))();
