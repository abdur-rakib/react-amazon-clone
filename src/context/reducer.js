import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./types";

export const initialState = {
  basket: [],
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      //Logic here
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case REMOVE_FROM_BASKET:
      //Logic here
      break;
    default:
      return state;
  }
}

export default reducer;
