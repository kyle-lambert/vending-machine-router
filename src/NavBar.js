import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <NavLink
          exact
          className="NavLink"
          activeClassName="NavLink-active"
          to="/chips">
          Chips
        </NavLink>
        <NavLink
          exact
          className="NavLink"
          activeClassName="NavLink-active"
          to="/coke">
          Coke
        </NavLink>
        <NavLink
          exact
          className="NavLink"
          activeClassName="NavLink-active"
          to="/water">
          Water
        </NavLink>
        <NavLink
          exact
          className="NavLink"
          activeClassName="NavLink-active"
          to="/chocolate">
          Chocolate
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;
