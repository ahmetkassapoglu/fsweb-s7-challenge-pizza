import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reactRouterDom from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
