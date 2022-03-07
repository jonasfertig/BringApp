import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLookInto, selectAvailableDeliveries } from "../../redux/lists/lists.selector";
import { fetchListsStartAsync, addListForShopper, setLookInto } from "../../redux/lists/lists.actions";
import { selectUserMail } from '../../redux/structure/structure.selector';
import "./shopper.scss";


function ShopperList() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserMail);
  useEffect(() => dispatch(fetchListsStartAsync(email)), [dispatch, email]);


  const lists = useSelector(selectAvailableDeliveries);
  const lookInto = useSelector(selectLookInto)

  return (
    <div className="content-container">
      {lookInto !== "none" ? <button className="shopper_back_button" onClick={() => dispatch(setLookInto("none"))}>back</button> : null}
      {lists?.map(delivery => (
        <div className="content-container" key={delivery.delivery_id}>
          {lookInto === "none" || lookInto === delivery.delivery_id ? // street nur anzeigen lassen wenn angenommen?
            <div className="delivery_container" key={delivery.delivery_id} >
              <div className="delivery_title">Delivery: {delivery.delivery_id}</div>
              {delivery.shopId !== null ? <div>EDEKA list</div> : null}
              <div className="delivery_budget">Budget: {delivery.budget} €</div>
              <div className="delivery_street">Street: {delivery.street}</div>
              {lookInto === "none" ? <button id="looking" onClick={() => dispatch(setLookInto(delivery.delivery_id))}>Look into</button> : null}

              {lookInto !== "none" ? delivery.items?.map(item => (

                <div>
                  <div className="delivery_item">
                    {item.item_name}:
                  </div>
                  <div className="delivery_desc">
                    {item.item_description}
                  </div>
                </div>
              )) : null}
              <button className="button" onClick={() => {
                dispatch(addListForShopper(delivery.delivery_id));
                dispatch(setLookInto("none"));
              }}>Accept</button>
            </div>
            : <div />}
        </div>
      ))
      }
      {!lists[0] ? <div>No available deliveries</div> : null}
    </div>
  );
}

export default ShopperList;