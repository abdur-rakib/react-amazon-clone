import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/reducer";
import reducer from "./context/reducer";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import { useSelector } from "react-redux";
// import { isLoaded } from "react-redux-firebase";

// const AuthIsLoaded = ({ children }) => {
//   const auth = useSelector((state) => state.firebase.auth);
//   if (!isLoaded(auth)) return;
//   return children;
// };

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
