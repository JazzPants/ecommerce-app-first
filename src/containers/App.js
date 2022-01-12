import React from "react";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
import ShoppingCart from "../containers/ShoppingCart";
// import React, { Component } from "react";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* <MainContent /> */}
        <ShoppingCart />
      </React.Fragment>
    );
  }
}

export default App;
