import { ShopActionTypes } from "./items.types";
import axios from "axios";

//defined actions the items reducer reacts to  
export const fetchItemsStart = () => ({
  type: ShopActionTypes.FETCH_ITEMS_START
});

export const fetchItemsSuccess = items => ({
  type: ShopActionTypes.FETCH_ITEMS_SUCCESS,
  payload: items
});

export const fetchItemsFailure = error => ({
  type: ShopActionTypes.FETCH_ITEMS_FAILURE,
  payload: error
});

export const resetItemsSuccess = () => ({
  type: ShopActionTypes.RESET_ITEMS_SUCCESS
});
export const fetchItemsForClientStart = () => ({
  type: ShopActionTypes.FETCH_ITEMS_FOR_CLIENT_START
});

export const fetchItemsForClientSuccess = clientItems => ({
  type: ShopActionTypes.FETCH_ITEMS_FOR_CLIENT_SUCCESS,
  payload: clientItems
});

export const fetchItemsForClientFailure = error => ({
  type: ShopActionTypes.FETCH_ITEMS_FOR_CLIENT_FAILURE,
  payload: error
});
export const setSearchItems = searchItems => ({
  type: ShopActionTypes.SET_SEARCH_ITEMS,
  payload: searchItems
});

export function fetchItemsStartAsyncWithId(id) {
  const url = "http://dck02.bw.hs-offenburg.de:8087/item/" + id;
  return dispatch => {
    dispatch(fetchItemsStart());
    axios
      .get(url)
      .then(response => dispatch(fetchItemsSuccess(JSON.parse(JSON.stringify(response.data)))))
      .catch(error => dispatch(fetchItemsFailure(error)));


  };
}
export function fetchItemsForClient(clientId) {
  const url = `http://dck02.bw.hs-offenburg.de:8087/item/client/${clientId}`
  return dispatch => {
    dispatch(fetchItemsForClientStart());
    axios
      .get(url)
      .then(response => dispatch(fetchItemsForClientSuccess(JSON.parse(JSON.stringify(response.data)))))
      .catch(error => dispatch(fetchItemsForClientFailure(error)));
  };
}

export function resetItems() {
  return dispatch => {
    dispatch(resetItemsSuccess());
  };
}