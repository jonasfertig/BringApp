import { createSelector } from "reselect";

const selectCreation = state => state.creation;

//selects items in just created list
export const selectItems = createSelector(
  [selectCreation],
  creation => creation.items
);