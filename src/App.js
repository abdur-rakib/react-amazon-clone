import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import checkout from "./pages/checkout";

import fakeData from "../src/fakeData/index";

class App extends Component {
  render() {
    console.log(fakeData);
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/checkout" component={checkout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
