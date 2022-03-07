import { createSelector } from "reselect";

const selectShop = state => state.shop;

// selects delivery lists
export const selectLists = createSelector(
  [selectShop],
  shop => shop.lists
);
// selects accepted deliveries
export const selectAcceptedDeliveries = createSelector(
  [selectShop],
  shop => shop.acceptedDeliveries
);
// selects available deliveries
export const selectAvailableDeliveries = createSelector(
  [selectShop],
  shop => shop.availableDeliveries
);
// selects isFetching state
export const selectIsListsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);
// selects the look into flag for detailed delivery view
export const selectLookInto = createSelector(
  [selectShop],
  shop => shop.lookInto
);