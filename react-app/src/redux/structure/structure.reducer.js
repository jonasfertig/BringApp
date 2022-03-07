import { StructureActionTypes } from "./structure.types";
import { AppStates, ShopperStates, ClientStates } from "./structureStates"

const INITIAL_STATE = {
  appState: AppStates.CHOICE,
  shopperState: ShopperStates.ACCEPTED_DELIVERIES,
  clientState: ClientStates.MY_DELIVERY,
  userName: undefined,
  user: {
    email: undefined
  }
};
//reducer
const structureReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StructureActionTypes.SET_APP_STATE:
      return {
        ...state,
        appState: action.payload
      };
    case StructureActionTypes.SET_SHOPPER_STATE:
      return {
        ...state,
        shopperState: action.payload
      };
    case StructureActionTypes.SET_CLIENT_STATE:
      return {
        ...state,
        clientState: action.payload
      };
    case StructureActionTypes.SET_USER_NAME:
      return {
        ...state,
        userName: action.payload
      };
    case StructureActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default structureReducer;