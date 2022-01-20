import React from "react";
import { Outlet, Link } from "react-router-dom";
// import { Route } from "react-router";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../containers/Home";
// import NavBar from "../components/NavBar";
// import ShoppingCart from "../containers/ShoppingCart";
// import ShoppingList from "../containers/ShoppingList";
// import Login from "../components/Login";
// import MyAccount from "../components/MyAccount";
// import NoMatchPage from "../NoMatchPage";
// import ProductFocus from "../components/ProductFocus";

// import React, { Component } from "react";
//material-ui for react apps
//select option for filter (bootstrap)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App Begins</h1>
        <Outlet />
      </div>
    );
    // <BrowserRouter>
    // <NavBar />
    //   <div className="container-fluid">
    //     <Routes>
    //       {/* <Route path="/" exact element={<Home />} /> */}
    //       <Route path="/" element={<ShoppingList />} />
    //       <Route path="/moredetails" element={<ProductFocus />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/myaccount" element={<MyAccount />} />
    //       <Route path="/shoppingcart" element={<ShoppingCart />} />

    //       <Route path="*" element={<NoMatchPage />}></Route>
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  }
}

export default App;
