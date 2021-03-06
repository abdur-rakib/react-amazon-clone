import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import home from "./pages/home";

import Android from "./components/Android";
import Laptop from "./components/Laptop";
import Camera from "./components/Camera";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login";
import Signup from "./components/Signup/Signup";
import Checkout from "./components/Checkout";
import { useStateValue } from "./context/StateProvider";
import { useEffect } from "react";
import { auth, db } from "./firebase/utils";
import {
  CREATE_USER,
  SET_AUTHENTICATED,
  SET_LOGOUT,
  GET_CART,
  SET_CART_LENGTH,
} from "./context/types";
import Profile from "./components/Profile/Profile";
import ResetPassword from "./components/ResetPassword";
import ChangePassword from "./components/ChangePassword";
import Shipping from "./components/Shipping";
import Payment from "./components/Payment";
import Placeorder from "./components/Placeorder";
import Success from "./components/Success";

const App = () => {
  const [state, dispatch] = useStateValue();
  console.log(state);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch({
          type: CREATE_USER,
          user: { email: userAuth.email, name: userAuth.displayName },
        });
        dispatch({ type: SET_AUTHENTICATED });
      } else {
        dispatch({ type: SET_LOGOUT });
      }
    });
    db.collection("cart")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let cartItems = [];
        // eslint-disable-next-line
        snapshot.docs.map((doc) => {
          cartItems.push(doc.data());
        });
        dispatch({ type: GET_CART, payload: cartItems });
        let sum = 0;
        cartItems.forEach((item) => {
          sum += item.count;
        });
        dispatch({ type: SET_CART_LENGTH, payload: sum });
      });
    // eslint-disable-next-line
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={home} />

          {/* <Route
            exact
            path="/"
            render={() =>
              !state.authenticated ? <Redirect to="/login" /> : <home />
            }
          /> */}
          <Route
            exact
            path="/signup"
            render={() =>
              state.authenticated ? <Redirect to="/" /> : <Signup />
            }
          />
          <Route
            exact
            path="/login"
            render={() =>
              state.authenticated ? <Redirect to="/profile" /> : <Login />
            }
          />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/checkout" component={Checkout} />
          {/* Category Route */}
          <Route exact path="/android" component={Android} />
          <Route exact path="/laptop" component={Laptop} />
          <Route exact path="/camera" component={Camera} />
          {/* Product Details */}
          <Route exact path="/:category/:id" component={ProductDetails} />

          <Route exact path="/profile" component={Profile} />
          <Route exact path="/reset" component={ResetPassword} />
          <Route exact path="/change" component={ChangePassword} />

          <Route exact path="/shipping" component={Shipping} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/placeorder" component={Placeorder} />
          <Route exact path="/success" component={Success} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
