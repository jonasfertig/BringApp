import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../redux/creatingLists/creation.actions";
import { selectItems } from "../../redux/creatingLists/creation.selector";
import "../Client/client.scss";
import { setClientState } from "../../redux/structure/structure.actions";
import { ClientStates } from "../../redux/structure/structureStates";

export default function ShopShoppingList() {
  const dispatch = useDispatch();
  let items = useSelector(selectItems);

  const removeItemFromList = index => {
    dispatch(actionCreators.removeItem(index));
  };

  return (
    <div className="test fit_con" variant="flush">
      {items?.map((item, index) => {
        return (
          <div className="listItem" key={index}>
            {item.itemName}
            <br />
            {item.desc}
            <div className="test">
              <button className="button " onClick={() => removeItemFromList(index)}>DEL</button>
            </div>
          </div>
        );

      })}
      {items.length !== 0 ? <button className="button confirm" variant="outline-dark" onClick={() => dispatch(setClientState(ClientStates.SHOP_CONFIRM_LIST))}>
        Confirm Grocery List
      </button> : null}
    </div>
  );
}