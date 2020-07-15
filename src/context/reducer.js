import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./types";

export const initialState = {
  basket: [],
};

// reducer

function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      //Logic here
      break;
    case REMOVE_FROM_BASKET:
      //Logic here
      break;
    default:
      return state;
  }
}

export default reducer;
