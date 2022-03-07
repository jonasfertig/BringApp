import {
  ShopActionTypes
} from "./lists.types";
import axios from "axios";

//defined actions the lists reducer reacts to  
export const fetchListsStart = () => ({
  type: ShopActionTypes.FETCH_LISTS_START
});

export const fetchListsSuccess = lists => ({
  type: ShopActionTypes.FETCH_LISTS_SUCCESS,
  payload: lists
});

export const fetchListsForShopSuccess = lists => ({
  type: ShopActionTypes.FETCH_LISTS_FOR_SHOP_SUCCESS,
  payload: lists
});

export const fetchListsFailure = error => ({
  type: ShopActionTypes.FETCH_LISTS_FAILURE,
  payload: error
});

export const fetchListsForShopperStart = () => ({
  type: ShopActionTypes.FETCH_LISTS_FOR_SHOPPER_START
});

export const fetchListsForShopperSuccess = lists => ({
  type: ShopActionTypes.FETCH_LISTS_FOR_SHOPPER_SUCCESS,
  payload: lists
});

export const fetchListsForShopperFailure = error => ({
  type: ShopActionTypes.FETCH_LISTS_FOR_SHOPPER_FAILURE,
  payload: error
});
export const fetchListsForClientStart = () => ({
  type: ShopActionTypes.FETCH_LISTS_FOR_CLIENT_START
});

export const fetchListsForClientSuccess = lists => ({
  type: ShopActionTypes.FETCH_LISTS_FOR_CLIENT_SUCCESS,
  payload: lists
});

export const fetchListsForClientFailure = error => ({
  type: ShopActionTypes.FETCH_LISTS_FOR_CLIENT_FAILURE,
  payload: error
});

export const removeListForShopperStart = () => ({
  type: ShopActionTypes.REMOVE_LIST_FOR_SHOPPER_START
});

export const removeListForShopperSuccess = () => ({
  type: ShopActionTypes.REMOVE_LIST_FOR_SHOPPER_SUCCESS
});

export const removeListForClientSuccess = () => ({
  type: ShopActionTypes.REMOVE_LIST_FOR_CLIENT_SUCCESS
});

export const removeListForShopperFailure = error => ({
  type: ShopActionTypes.REMOVE_LIST_FOR_SHOPPER_FAILURE,
  payload: error
});

export const addListForShopperStart = () => ({
  type: ShopActionTypes.ADD_LIST_FOR_SHOPPER_START
});

export const addListForShopperSuccess = () => ({
  type: ShopActionTypes.ADD_LIST_FOR_SHOPPER_SUCCESS
});

export const addListForShopperFailure = error => ({
  type: ShopActionTypes.ADD_LIST_FOR_SHOPPER_FAILURE,
  payload: error
});

export const setLookInto = deliveryId => ({
  type: ShopActionTypes.SET_LOOK_INTO,
  payload: deliveryId
});

export const setIsPaidForShopperStart = () => ({
  type: ShopActionTypes.SET_ISPAID_FOR_SHOPPER_START
});

export const setIsPaidForShopperSuccess = () => ({
  type: ShopActionTypes.SET_ISPAID_FOR_SHOPPER_SUCCESS
});

export const setIsPaidForShopperFailure = error => ({
  type: ShopActionTypes.SET_ISPAID_FOR_SHOPPER_FAILURE,
  payload: error
});

export const setShopperDoneStart = () => ({
  type: ShopActionTypes.SET_SHOPPER_DONE_START
});

export const setShopperDoneSuccess = () => ({
  type: ShopActionTypes.SET_SHOPPER_DONE_SUCCESS
});

export const setShopperDoneFailure = error => ({
  type: ShopActionTypes.SET_SHOPPER_DONE_FAILURE,
  payload: error
});

export const fetchListsStartAsync = (shopperId) => {
  return dispatch => {
    dispatch(fetchListsStart());
    axios
      .get(`http://dck02.bw.hs-offenburg.de:8087/delivery/available/${shopperId}`)
      .then(response => {
        dispatch(fetchListsSuccess(JSON.parse(JSON.stringify(response.data))));
      })
      .catch(error => dispatch(fetchListsFailure(error)));

  };
};

export const fetchListsForShop = (shopperId, shopId) => {
  return dispatch => {
    dispatch(fetchListsStart());
    axios
      .get(`http://dck02.bw.hs-offenburg.de:8087/delivery/available/${shopperId}/${shopId}`)
      .then(response => {
        dispatch(fetchListsSuccess(JSON.parse(JSON.stringify(response.data))));
      })
      .catch(error => dispatch(fetchListsFailure(error)));

  };
};

export const fetchListsForShopper = (shopperId) => {
  return dispatch => {
    dispatch(fetchListsForShopperStart());
    axios
      .get(`http://dck02.bw.hs-offenburg.de:8087/delivery/${shopperId}`)
      .then(response => {
        dispatch(fetchListsForShopperSuccess(JSON.parse(JSON.stringify(response.data))));
      })
      .catch(error => dispatch(fetchListsForShopperFailure(error)));

  };
};
export const fetchListsForClient = (clientId) => {
  return dispatch => {
    dispatch(fetchListsForClientStart());
    axios
      .get(`http://dck02.bw.hs-offenburg.de:8087/delivery/client/${clientId}`)
      .then(response => {
        dispatch(fetchListsForClientSuccess(JSON.parse(JSON.stringify(response.data))));
      })
      .catch(error => dispatch(fetchListsForClientFailure(error)));

  };
};

export const removeListForShopper = (deliveryId) => {
  return (dispatch, getState) => {
    dispatch(removeListForShopperStart());
    axios
      .get(`http://dck02.bw.hs-offenburg.de:8087/delivery/shopper/${deliveryId}`)
      .then(response => {
        dispatch(removeListForShopperSuccess(response.status));
        dispatch(fetchListsForShopper(getState().structure.user.email))
      })
      .catch(error => dispatch(removeListForShopperFailure(error)));
  };
};
export const removeListForClient = (deliveryId) => {
  return (dispatch, getState) => {
    dispatch(removeListForShopperStart());
    axios
      .delete(`http://dck02.bw.hs-offenburg.de:8087/delivery/${deliveryId}`)
      .then(response => {
        dispatch(removeListForClientSuccess(response.status));
        dispatch(fetchListsForClient(getState().structure.user.email))
      })
      .catch(error => dispatch(removeListForShopperFailure(error)));
  };
};

export const addListForShopper = (deliveryId) => {
  return (dispatch, getState) => {
    dispatch(addListForShopperStart());
    axios
      .get(`http://dck02.bw.hs-offenburg.de:8087/delivery/shopper/${deliveryId}/${getState().structure.user.email}`) //insert shopper_id when available
      .then(response => {
        dispatch(addListForShopperSuccess());
        dispatch(fetchListsStartAsync(getState().structure.user.email))
      })
      .catch(error => dispatch(addListForShopperFailure(error)));
  };
};

export const setIsPaidForShopper = (deliveryId) => {
  return (dispatch, getState) => {
    dispatch(setIsPaidForShopperStart());
    axios
      .get(`http://dck02.bw.hs-offenburg.de:8087/delivery/isPaid/${deliveryId}`)
      .then(response => {
        dispatch(setIsPaidForShopperSuccess());
        dispatch(fetchListsForShopper(getState().structure.user.email))
      })
      .catch(error => dispatch(setIsPaidForShopperFailure(error)));
  };
};

export const setShopperDone = (deliveryId) => {
  return (dispatch, getState) => {
    dispatch(setShopperDoneStart());
    axios
      .get(`http://dck02.bw.hs-offenburg.de:8087/delivery/shopperDone/${deliveryId}`)
      .then(response => {
        dispatch(setShopperDoneSuccess());
        dispatch(fetchListsForShopper(getState().structure.user.email))
      })
      .catch(error => dispatch(setShopperDoneFailure(error)));
  };
};
export const setClientDone = (deliveryId) => {
  return (dispatch, getState) => {
    dispatch(setShopperDoneStart());
    axios
      .get(`http://dck02.bw.hs-offenburg.de:8087/delivery/clientDone/${deliveryId}`)
      .then(response => {
        dispatch(setShopperDoneSuccess());
        dispatch(fetchListsForClient(getState().structure.user.email))
      })
      .catch(error => dispatch(setShopperDoneFailure(error)));
  };
};