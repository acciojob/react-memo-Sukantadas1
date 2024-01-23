// index.js
import React from "react";
import ReactDOM from "react-dom";
import MemoApp from "./components/App";
import "./components/index.css"; // Add your styles

ReactDOM.render(
  <React.StrictMode>
    <MemoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
