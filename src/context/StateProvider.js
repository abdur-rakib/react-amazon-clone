// setup data layer

import React, { createContext, useReducer, useContext } from "react";

// This is Data Layer
export const StateContext = createContext();

// This is Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
