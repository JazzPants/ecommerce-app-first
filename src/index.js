import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css"; //global css file
import "font-awesome/css/font-awesome.css";

import Home from "../src/containers/Home";
import NavBar from "../src/NavBar";
import ShoppingCart from "./containers/ShoppingCart";
import ShoppingList from "./containers/ShoppingList";
import Login from "./Login";
import MyAccount from "../src/MyAccount";
import NoMatchPage from "./NoMatchPage";
import ProductFocus from "../src/ProductFocus";
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

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    {/* <NavBar /> */}
    {/* <div className="container-fluid"></div> */}
    <Routes>
      {/* <Route path="/" exact element={<Home />} /> */}
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />

        <Route path="shoppinglist" element={<ShoppingList />}>
          {/* <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a Product</p>
              </main>
            }
          /> */}
        </Route>
        <Route path="moredetails" element={<ProductFocus />} />
        <Route path="login" element={<Login />} />
        <Route path="myaccount" element={<MyAccount />} />
        <Route path="shoppingcart" element={<ShoppingCart />} />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
