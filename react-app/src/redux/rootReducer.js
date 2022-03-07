import { combineReducers } from "redux";
import itemsReducer from "./items/items.reducer";
import structureReducer from "./structure/structure.reducer";
import listsReducer from "./lists/lists.reducer";
import creationReducer from "./creatingLists/creation.reducer.js";

// combining reducers since store only holds 1
const rootReducer = combineReducers({
  itemStore: itemsReducer,
  shop: listsReducer,
  structure: structureReducer,
  creation: creationReducer,
});

export default rootReducer;