import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

class VendingMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  render() {
    return (
      <div className="VendingMachine">
        <h1>Vending Machine</h1>
        <p>Select a product below...</p>
        <div>
          <Link className="Link" to="/water">
            Water
          </Link>
          <Link className="Link" to="/chocolate">
            Chocolate
          </Link>
          <Link className="Link" to="/coke">
            Coke
          </Link>
          <Link className="Link" to="/chips">
            Chips
          </Link>
        </div>
      </div>
    );
  }
}

export default VendingMachine;
