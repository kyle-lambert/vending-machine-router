import React, { Component } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import "./Item.css";

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <NavBar />
        <div className="Item-product">
          <Link className="Item-link" to="/">
            Go Home
          </Link>
          <img src={require(`./images/${this.props.img}`)}></img>
        </div>
      </div>
    );
  }
}

export default Item;
