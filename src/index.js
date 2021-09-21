import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
