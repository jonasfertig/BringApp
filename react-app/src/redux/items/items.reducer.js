import { ShopActionTypes } from "./items.types";

const INITIAL_STATE = {
  items: [],
  clientItems: [],
  searchItems: [],
  isFetching: false,
  errorMessage: undefined,
};
//reducer
const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_ITEMS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isFetching: false
      };
    case ShopActionTypes.FETCH_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        items: [],
        errorMessage: action.payload
      };
    case ShopActionTypes.RESET_ITEMS_SUCCESS:
      return {
        ...state,
        items: []
      };
    case ShopActionTypes.FETCH_ITEMS_FOR_CLIENT_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_ITEMS_FOR_CLIENT_SUCCESS:
      return {
        ...state,
        clientItems: action.payload,
        isFetching: false
      };
    case ShopActionTypes.FETCH_ITEMS_FOR_CLIENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        items: [],
        errorMessage: action.payload
      };
    case ShopActionTypes.SET_SEARCH_ITEMS:
      return {
        ...state,
        isFetching: false,
        searchItems: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;