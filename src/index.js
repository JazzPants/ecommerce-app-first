import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css"; //global css file
import "font-awesome/css/font-awesome.css";

import App from "./containers/App";
//import object (left side) from module name (right side)

// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
// //ReactDOM.render(<Navbar />, document.getElementById("root")) //alternate method

render(<App />, document.getElementById("root"));
