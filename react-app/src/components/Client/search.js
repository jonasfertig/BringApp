import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectClientItems, selectSearchItems } from "../../redux/items/items.selector";
import { fetchItemsForClient, setSearchItems } from "../../redux/items/items.actions";
import { actionCreators } from "../../redux/creatingLists/creation.actions";
import "./search.scss";



function Search(props) {
    const [input] = useState("");
    const dispatch = useDispatch();
    
    // clientID given by props -> 99999 for EDEKA shop; uuidv4 id for clients
    const { clientId } = props;
    useEffect(() => dispatch(fetchItemsForClient(clientId)), [dispatch, clientId]);
    
    const items = useSelector(selectClientItems);
    const shownItems = useSelector(selectSearchItems);
    const searchInput = React.useRef(null);

    const filterItems = event => {
        if (event.target.value === "Search for items") {
            return items;
        }
        dispatch(setSearchItems(items?.filter((item) => {
            const postName = item.item_name.toLowerCase();
            return postName.includes(event.target.value.toLowerCase());
        })));
        return;

    };

    //Add Button effect
    const handleOnClick = (itemName, itemDesc, itemId) => {
        dispatch(actionCreators.addToList({ "itemName": itemName, "desc": itemDesc, "item_id": itemId }));
    }
    return (
        <div className="search_container">
            <input
                className="input"
                placeholder="Search for items"
                defaultValue={input}
                onKeyUp={filterItems}
                onFocus={filterItems}
                ref={searchInput}
            />

            {document.activeElement === searchInput.current ?
                shownItems?.map(item => (
                    <div className="search_item">
                        <div>
                            <div className="delivery_item">
                                {item.item_name}:
                            </div>
                            <div className="delivery_desc">
                                {item.item_description}
                            </div>
                        </div>
                        <button className="button" onClick={() => handleOnClick(item.item_name, item.item_description, item.item_id)}>add</button>
                    </div>
                ))
                : <div></div>}
        </div>

    );

}

export default Search;