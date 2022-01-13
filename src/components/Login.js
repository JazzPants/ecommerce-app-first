import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "../containers/ShoppingCart";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }

  onLoginClick = () => {
    console.log(this.state);
    if (
      this.state.email === "test@123.com" &&
      this.state.password === "test123"
    ) {
      //success
      this.setState({
        message: <span className="text-success">Successfully logged in</span>,
      });
    } else {
      //error
      this.setState({
        message: (
          <span className="text-danger">Invalid login, please try again.</span>
        ),
      });
    }
  };

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        {/* Email Input starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        {/* Email Input ends */}
        {/* Password Input starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        {/* Password Input ends */}

        <div className="text-end">
          {this.state.message}
          <button className="btn btn-primary m-2" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
