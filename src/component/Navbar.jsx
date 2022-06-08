import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Product from "./Product";
import "../component/App.css";
function Navbar({ itemsCount }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  py-3 shadow-sm ">
        <div className="container">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink
                  className="nav-link active  fw-bold fs-4 "
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  fw-bold fs-4" to="/products/">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold fs-4" to="/about/">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold fs-4" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink
                to="/login"
                className="btn btn-outline-light fw-bold fs-5"
              >
                <i className="fa fa-sign-in me-1"></i>
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn btn-outline-light ms-2 fw-bold fs-5"
              >
                <i className="fa fa-user-p1us me-1"></i>
                Register
              </NavLink>
              <NavLink
                to="/cart"
                className="btn btn-outline-light ms-2 fw-bold fs-5"
              >
                <i className="fa fa-shopping-cart me-1"></i>
                Cart ({itemsCount})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
