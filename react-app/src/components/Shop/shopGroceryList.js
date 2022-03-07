import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/creatingLists/creation.actions";
import Search from "../Client/search.js";

export default function ShopGroceryList() {
  const dispatch = useDispatch();

  // Clear Button
  const handleClear = () => {
    dispatch(actionCreators.clearItems());
  };

  return (
    <div className="fit_con">
      <Search clientId="99999" />
      <button className="button" onClick={handleClear}>
        Clear all items
      </button>
    </div>
  );
}