import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import home from "./pages/home";
import signup from "./pages/signup/signup";
import checkout from "./pages/checkout";

import Android from "./components/Android";
import Laptop from "./components/Laptop";
import Camera from "./components/Camera";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import login from "./pages/login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={home} />

            <Route exact path="/signup" component={signup} />
            <Route exact path="/login" component={login} />
            <Route exact path="/checkout" component={checkout} />
            {/* Category Route */}
            <Route exact path="/android" component={Android} />
            <Route exact path="/laptop" component={Laptop} />
            <Route exact path="/camera" component={Camera} />
            {/* Product Details */}
            <Route exact path="/:category/:id" component={ProductDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
