import { ShopActionTypes } from "./lists.types";

const INITIAL_STATE = {
  lists: [[], []],
  acceptedDeliveries: [],
  availableDeliveries: [],
  availableDeliveriesShop: [],
  isFetching: false,
  errorMessage: undefined,
  lookInto: "none",
};
// reducer
const listsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_LISTS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_LISTS_SUCCESS:
      return {
        ...state,
        availableDeliveries: action.payload,
        isFetching: false
      };
    case ShopActionTypes.FETCH_LISTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case ShopActionTypes.FETCH_LISTS_FOR_SHOPPER_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_LISTS_FOR_SHOPPER_SUCCESS:
      return {
        ...state,
        acceptedDeliveries: action.payload,
        isFetching: false
      };
    case ShopActionTypes.FETCH_LISTS_FOR_SHOPPER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case ShopActionTypes.FETCH_LISTS_FOR_CLIENT_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_LISTS_FOR_CLIENT_SUCCESS:
      return {
        ...state,
        lists: action.payload,
        isFetching: false
      };
    case ShopActionTypes.FETCH_LISTS_FOR_CLIENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case ShopActionTypes.REMOVE_LIST_FOR_SHOPPER_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.REMOVE_LIST_FOR_SHOPPER_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case ShopActionTypes.REMOVE_LIST_FOR_SHOPPER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case ShopActionTypes.REMOVE_LIST_FOR_CLIENT_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case ShopActionTypes.ADD_LIST_FOR_SHOPPER_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.ADD_LIST_FOR_SHOPPER_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case ShopActionTypes.ADD_LIST_FOR_SHOPPER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case ShopActionTypes.SET_ISPAID_FOR_SHOPPER_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.SET_ISPAID_FOR_SHOPPER_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case ShopActionTypes.SET_ISPAID_FOR_SHOPPER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case ShopActionTypes.SET_SHOPPER_DONE_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.SET_SHOPPER_DONE_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case ShopActionTypes.SET_SHOPPER_DONE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case ShopActionTypes.FETCH_LISTS_FOR_SHOP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        availableDeliveriesShop: action.payload
      };
    case ShopActionTypes.SET_LOOK_INTO:
      return {
        ...state,
        lookInto: action.payload
      };
    default:
      return state;
  }
};

export default listsReducer;