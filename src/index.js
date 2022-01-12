import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css"; //global css file

import { render } from "react-dom";
import App from "./containers/App";
//import object (left side) from module name (right side)

render(<App />, document.getElementById("root"));
//ReactDOM.render(<Navbar />, document.getElementById("root")) //alternate method
