import React from "react";
import { Outlet, Link } from "react-router-dom";
// import React, { Component } from "react";

class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <h1>Hello</h1>
        <p className="highlight">My name is Babel</p>
        <button className="btn btn-danger">Woops</button> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-style">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              A Cool Shop
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/myaccount">
                    My Account
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/shoppinglist">
                    Shopping List
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/shoppingcart">
                    Shopping Cart
                  </Link>
                </li>

                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}

                {/* <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li> */}
              </ul>

              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
        <Outlet />
      </React.Fragment>
    );
  }
}

export default NavBar;
