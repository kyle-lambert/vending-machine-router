import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Item from "./Item";
import VendingMachine from "./VendingMachine";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={VendingMachine}></Route>
            <Route
              exact
              path="/chips"
              render={() => <Item img="chips.jpg" />}></Route>
            <Route
              exact
              path="/chocolate"
              render={() => <Item img="chocolate.jpg" />}></Route>
            <Route
              exact
              path="/water"
              render={() => <Item img="water.jpg" />}></Route>
            <Route
              exact
              path="/coke"
              render={() => <Item img="coke.jpg" />}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
