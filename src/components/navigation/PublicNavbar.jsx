import { NavLink } from "react-router-dom";
import "./PublicNavbar.css";
import React from "react";

function PublicNavbar() {
  return (
    <div className="navbar-wrapper">
      <div className="public-navbar">
        <div className="public-navbar-left">
          <div className="logo">Helix</div>

          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/products">Products</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
          </ul>
        </div>
        <div className="public-navbar-right">
          <ul className="auth-links">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PublicNavbar;
