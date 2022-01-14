import React from "react";
// import { Route } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
import ShoppingCart from "../containers/ShoppingCart";
import ShoppingList from "../containers/ShoppingList";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import NoMatchPage from "../NoMatchPage";
// import React, { Component } from "react";
//material-ui for react apps
//select option for filter (bootstrap)
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            {/* <Route path="/" element={<NavBar />} /> */}
            {/* <Route element={<NavBar />} /> */}
            {/* <MainContent /> */}
            <Route path="/" exact element={<ShoppingList />} />
            <Route path="/login" exact element={<Login />} />
            {/* <Route path="/maincontent" exact element={<MainContent />} /> */}
            <Route path="/myaccount" exact element={<Dashboard />} />
            <Route path="/shoppingcart" exact element={<ShoppingCart />} />
            <Route path="*" element={<NoMatchPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
