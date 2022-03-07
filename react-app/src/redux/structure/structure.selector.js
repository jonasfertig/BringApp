import { createSelector } from "reselect";

const selectStructure = state => state.structure;

// selects APP State -> structureStates
export const selectAppState = createSelector(
  [selectStructure],
  structure => structure.appState
);
// selects SHOPPER State -> structureStates
export const selectShopperState = createSelector(
  [selectStructure],
  structure => structure.shopperState
);
// selects CLIENT State -> structureStates
export const selectClientState = createSelector(
  [selectStructure],
  structure => structure.clientState
);
// selects current logged in username
export const selectUserName = createSelector(
  [selectStructure],
  structure => structure.userName
);
// selects current logged in user
export const selectUser = createSelector(
  [selectStructure],
  structure => structure.user
);
// selects current logged in user_email
export const selectUserMail = createSelector(
  [selectStructure],
  structure => structure.user.email
);