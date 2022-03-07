import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../redux/creatingLists/creation.actions";
import { selectUserMail } from "../../redux/structure/structure.selector";
import Search from "./search.js"

export default function GroceryList() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserMail);
  const [input, setInput] = useState("");
  const [inputDesc, setInputDesc] = useState("");


  // Name Input
  const handleInputChange = event => {
    return setInput(event.target.value);
  };
  // Description Input
  const handleInputDescChange = event => {
    return setInputDesc(event.target.value);
  };

  // Add Button
  const handleSubmit = () => {
    dispatch(actionCreators.addToList({ "itemName": input, "desc": inputDesc }));
    setInput("");
    setInputDesc("");
  };

  // Clear Button
  const handleClear = () => {
    dispatch(actionCreators.clearItems());
  };

  return (
    <div className="fit_con">
      <Search clientId={email} />
      <input
        className="input"
        placeholder="Add item..."
        value={input}
        onChange={handleInputChange}
      />
      <input
        className="input"
        placeholder="Add Description..."
        value={inputDesc}
        onChange={handleInputDescChange}
      />
     
     {input !== ""? <button className="button create" onClick={handleSubmit}>
        Add
      </button>:null} 
      <button className="button create" onClick={handleClear}>
        Clear all
      </button>
    </div>
  );
}
