import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAcceptedDeliveries } from "../../redux/lists/lists.selector";
import { fetchListsForShopper, removeListForShopper, setIsPaidForShopper, setShopperDone } from "../../redux/lists/lists.actions";
import "./shopper.scss";
import { selectUserMail } from '../../redux/structure/structure.selector';

function DeliveryView() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserMail);
  useEffect(() => dispatch(fetchListsForShopper(email)), [dispatch, email]);
  const lists = useSelector(selectAcceptedDeliveries);


  return (
    <div className="content-container">

      {lists?.map(delivery => (
        <div className="content-container" key={delivery.delivery_id}>
          <div className="delivery_container" key={delivery.delivery_id} >
            <div className="delivery_title">Delivery: {delivery.delivery_id}</div>
            {delivery.shopId !== null ? <div>EDEKA list</div> : null}
            <div>Client: {delivery.username}</div>
            <div className="delivery_budget">Budget: {delivery.budget} €</div>
            <div className="delivery_street">Street: {delivery.street}</div>
            <div>Housenumber: {delivery.house_number}</div>
            <div>Questions about delivery? {delivery.email}</div>
            {delivery.items?.map(item => (
              <div>
                <div className="delivery_item">
                  {item.item_name}:
                </div>
                <div className="delivery_desc">
                  {item.item_description}
                </div>
              </div>
            ))// Street only in accepted lists?
            }
            {!delivery.isPaid ? <button className="button" onClick={() => dispatch(removeListForShopper(delivery.delivery_id))}>Remove</button> : null}
            {!delivery.isPaid ? <button className="button" onClick={() => dispatch(setIsPaidForShopper(delivery.delivery_id))}>Paid for</button> : null}
            {delivery.isPaid ? <button className="button" onClick={() => dispatch(setShopperDone(delivery.delivery_id))}>Confirm delivery</button> : null}
          </div>
        </div>
      ))}
      {!lists[0] ? <div>No accepted deliveries</div> : null}
    </div>
  );
}

export default DeliveryView;
