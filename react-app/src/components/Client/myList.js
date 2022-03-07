import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchListsForClient, removeListForClient, setClientDone } from "../../redux/lists/lists.actions";
import { selectLists } from '../../redux/lists/lists.selector';
import "./client.scss";
import { selectUserMail } from "../../redux/structure/structure.selector";


function MyList() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserMail);
  useEffect(() => dispatch(fetchListsForClient(email)), [email, dispatch]);

  // lists is your own created list => lists[0] are details; lists[1] are the items
  const lists = useSelector(selectLists);


  return (
    <div className="content-container">
      {lists[0]?.map(delivery => (
        <div className="content-container">
          <div className="delivery_container">
            <div className="delivery_title">Delivery: {delivery.delivery_id}</div>
            <div className="delivery_budget">Budget: {delivery.budget} €</div>
            {delivery.shopper_id ? <div className="accepted">accepted</div> : null}
            {lists[1]?.map(item => (
              <div>
                <div className="delivery_item">
                  {item.item_name}:
                </div>
                <div className="delivery_desc">
                  {item.item_description}
                </div>
              </div>
            ))
            }
            {!delivery.isPaid ? <button className="button" onClick={() => dispatch(removeListForClient(delivery.delivery_id))}>Remove</button> : <div>paid for by shopper</div>}
            {delivery.shopperDone ? <button className="button" onClick={() => dispatch(setClientDone(delivery.delivery_id))}>Shopper delivered - Confirm delivery</button> : null}
          </div>
        </div>
      ))}
      {lists[0].length === 0 ? <div key={0}>Empty..., maybe create a list?</div> : null}
    </div>
  );
}

export default MyList;