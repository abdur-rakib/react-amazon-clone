import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/reducer";
import reducer from "./context/reducer";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
