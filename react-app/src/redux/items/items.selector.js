import { createSelector } from "reselect";

const selectItemStore = state => state.itemStore;

//selects items
export const selectItems = createSelector(
  [selectItemStore],
  itemStore => itemStore.items
);
//selects fetching state
export const selectIsItemsFetching = createSelector(
  [selectItemStore],
  itemStore => itemStore.isFetching
);
//selects previously created items
export const selectClientItems = createSelector(
  [selectItemStore],
  itemStore => itemStore.clientItems
);
//selects shown items in search bar
export const selectSearchItems = createSelector(
  [selectItemStore],
  itemStore => itemStore.searchItems
);