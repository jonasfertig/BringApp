import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLookInto, selectAvailableDeliveries } from "../../redux/lists/lists.selector";
import { fetchListsForShop, setLookInto } from "../../redux/lists/lists.actions";
import { selectUserMail } from '../../redux/structure/structure.selector';
import "../Shopper/shopper.scss";
import "./ShopAvailableDeliveries.scss";

function ShopAvailableDeliveries() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserMail);
  useEffect(() => dispatch(fetchListsForShop(email, 99999)) ,[dispatch, email]);


  const lists = useSelector(selectAvailableDeliveries);
  const lookInto = useSelector(selectLookInto)

  return (
    <div className="shop_container">
      <h1>EDEKA-shopping lists from other customers</h1>
      {lookInto !== "none" ? <button className="shopper_back_button" onClick={() => dispatch(setLookInto("none"))}>back</button> : null}
      {lists?.map(delivery => (
        <div className="content-container" key={delivery.delivery_id}>
          {lookInto === "none" || lookInto === delivery.delivery_id ? // street nur anzeigen lassen wenn angenommen?
            <div className="delivery_container" key={delivery.delivery_id} >
              <div className="delivery_title">Delivery: {delivery.delivery_id}</div>
              <div className="delivery_budget">Budget: {delivery.budget} €</div>
              <div className="delivery_street">Street: {delivery.street}</div>
              {lookInto === "none" ?<button id="looking" onClick={() => dispatch(setLookInto(delivery.delivery_id))}>Look into</button>:null}

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
              
            </div>
            : <div />}
        </div>
      ))
      }
      {!lists[0]? <div>No available deliveries</div>:null}
    </div>
  );
}

export default ShopAvailableDeliveries;