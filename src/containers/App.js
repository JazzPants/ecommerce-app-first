import React from "react";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
// import React, { Component } from "react";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MainContent />
      </React.Fragment>
    );
  }
}

export default App;
