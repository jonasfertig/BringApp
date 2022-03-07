import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../redux/creatingLists/creation.actions";
import { selectItems } from "../../redux/creatingLists/creation.selector";
import "./client.scss";
import { setClientState } from "../../redux/structure/structure.actions";
import { ClientStates } from "../../redux/structure/structureStates";

export default function ShoppingList() {
  const dispatch = useDispatch();
  let items = useSelector(selectItems);
  const [textInput, setTextInput] = useState("");

  const removeItemFromList = index => {
    dispatch(actionCreators.removeItem(index));
  };
  // Description Change Dispatch
  function handleInputChange(index) {
    dispatch(actionCreators.addDesc(index, textInput))
  };

  const handleChange = (event) => {
    setTextInput(event.target.value);
  }

  return (
    <div className="test fit_con" variant="flush">
      {items?.map((item, index) => {
        return (
          <div className="listItem" key={index}>
            {item.itemName}
            <br />
            <input className="input" type="text" defaultValue={item.desc} onChange={handleChange}></input>
            <div className="test">
            <button className="button " onClick={() => removeItemFromList(index)}>DEL</button>
            <button className="button apply" onClick={() => handleInputChange(index)}>Apply Changes</button>
            </div>
          </div>
        );

      })}
      {items.length !== 0 ? <button className="button confirm" variant="outline-dark" onClick={() => dispatch(setClientState(ClientStates.CONFIRM_LIST))}>
        Confirm Grocery List
      </button> : null}
    </div>
  );
}
