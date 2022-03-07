import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../../redux/creatingLists/creation.selector";
import axios from "axios";
import { actionCreators } from "../../redux/creatingLists/creation.actions";
import { ClientStates, AppStates } from "../../redux/structure/structureStates";
import { setAppState, setClientState } from "../../redux/structure/structure.actions";
import { selectUser } from "../../redux/structure/structure.selector";
export default function ShopConfirmation() {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    let items = useSelector(selectItems);
    var url = "http://dck02.bw.hs-offenburg.de:8087/";
    const [budget, setBudget] = useState("");
    const { v4: uuid_v4 } = require('uuid');

    // delivery id
    let del_id = uuid_v4();
    //reference array
    let foo = [];

    // Post Items
    const handlePost = () => {
        postItems();
        dispatch(actionCreators.postItems());
        setBudget(0);
        dispatch(setClientState(ClientStates.MY_DELIVERY));
        dispatch(setAppState(AppStates.CHOICE));
    }
    // budget Input
    const handleInputChange = event => {

        if (!isNaN(event.target.value)) {
            return setBudget(event.target.value);
        }
    };

    // Create Database entries one after another, FK-restrictions
    function postItems() {
        const url1 = url + "item";
        items.forEach(item => {
            if (item.item_id) {
                foo.push([del_id, item.item_id]);
            }
            else {
                let itemid = uuid_v4();
                let bar = [del_id, itemid];
                foo.push(bar);
                axios.post(url1, { item, item_id: itemid, email: user.email }).catch(error => dispatch(actionCreators.failure(error)));
            }
        });
        postDelivery();

    }
    async function postDelivery() {
        const url2 = url + "delivery";
        await axios.post(url2, { delivery_id: del_id, budget: budget, client_id: user.email, shop_id: 99999 }).catch(error => dispatch(actionCreators.failure(error)));


        postDel_Ref();

    }
    async function postDel_Ref() {
        const url3 = url + "reference"
        await axios.post(url3, { foo/** del_id, item_id  */ }).catch(error => dispatch(actionCreators.failure(error)));


    }

    //Show: Name (context login), UserID (context login), Budget (Input), Items (Store)
    return (
        <div className="confirm_container" >
            <div className="fit_con" id="name">{user.username}</div>
            <div className="fit_con" id="userId">{user.email}</div>
            Budget:
            <input id="budget" defaultValue={budget} onChange={handleInputChange} required type="number" step=".01"></input>
            {items?.map((item, index) => {
                return (
                    <div className="listItem" key={index}>
                        {item.itemName}
                        <br />
                        {item.desc}
                    </div>
                );

            })}
            {budget !== "" ? <button className="button" variant="outline-dark" onClick={handlePost}>Confirm</button> : null}
        </div>
    );
}