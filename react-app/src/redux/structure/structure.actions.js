import {
  StructureActionTypes
} from "./structure.types";
import axios from 'axios';

//defined actions the structure reducer reacts to  
export const setAppState = appState => ({
  type: StructureActionTypes.SET_APP_STATE,
  payload: appState
});

export const setShopperState = shopperState => ({
  type: StructureActionTypes.SET_SHOPPER_STATE,
  payload: shopperState
});

export const setClientState = clientState => ({
  type: StructureActionTypes.SET_CLIENT_STATE,
  payload: clientState
});

export const setUserError = error => ({
  type: StructureActionTypes.SET_USER_ERROR,
  payload: error
});
export const setUserName = username => ({
  type: StructureActionTypes.SET_USER_NAME,
  payload: username
});

export const fetchUserSuccess = user => ({
  type: StructureActionTypes.SET_USER,
  payload: user
});

export const fetchUser = (username) => {
  return dispatch => {
    axios
      .get(`http://dck02.bw.hs-offenburg.de:8087/user/${username}`)
      .then(response => {
        dispatch(fetchUserSuccess(JSON.parse(JSON.stringify(response.data))));
      })
      .catch(error => dispatch(setUserError(error)));

  };
};