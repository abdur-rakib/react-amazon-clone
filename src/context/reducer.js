import {
  ADD_TO_BASKET,
  CREATE_USER,
  SET_AUTHENTICATED,
  SET_LOGOUT,
  GET_CART,
  SET_CART_LENGTH,
  CLEAR_LOADING,
  SET_LOADING,
  SET_SEARCHTEXT,
} from "./types";

export const initialState = {
  basket: [],
  user: null,
  authenticated: false,
  cartLength: 0,
  loading: false,
  search: "",
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case CREATE_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_LOGOUT:
      return {
        ...state,
        authenticated: false,
        user: null,
      };

    case GET_CART:
      return {
        ...state,
        basket: action.payload,
      };

    case SET_CART_LENGTH:
      return {
        ...state,
        cartLength: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_SEARCHTEXT:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
