import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAppState, setShopperState, fetchUser } from "../../redux/structure/structure.actions";
import { ShopperStates, AppStates } from "../../redux/structure/structureStates";
import { selectShopperState } from "../../redux/structure/structure.selector";
import "./shopper.scss";
import DeliveryView from "./deliveryView";
import ShopperList from "./shopperList";
import UserService from '../../services/UserService';
//import ShopAvailableDeliveries from "../Shop/shopAvailableDeliveries";

function ShopperContainer() {

  const shopperState = useSelector(selectShopperState);
  const dispatch = useDispatch();

  const user_name = UserService.getUsername();
  useEffect(() => {
    dispatch(fetchUser(user_name));
  }, [dispatch, user_name]);
  function getComponent(shopperState) {
    switch (shopperState) {
      case ShopperStates.AVAILABLE_DELIVERIES: return (<ShopperList />);
      case ShopperStates.ACCEPTED_DELIVERIES: return (<DeliveryView />);
      //case ShopperStates.AVAILABLE_DEIVERIES_SHOP: return (<ShopAvailableDeliveries/>);
      default: return;
    }
  }
  function getTitle(shopperState) {
    switch (shopperState) {
      case ShopperStates.AVAILABLE_DELIVERIES: return ("Available Deliveries");
      case ShopperStates.ACCEPTED_DELIVERIES: return ("Accepted Deliveries")
      //case ShopperStates.AVAILABLE_DEIVERIES_SHOP: return ("Shop deliveries");
      default: return;
    }
  }

  return (
    <div className="user_container">
      <div className="navbar">
        <button onClick={() => dispatch(setAppState(AppStates.CHOICE))}>home</button>
        {shopperState === ShopperStates.ACCEPTED_DELIVERIES ? <button onClick={() => dispatch(setShopperState(ShopperStates.AVAILABLE_DELIVERIES))}>available deliveries</button> :
          <button onClick={() => dispatch(setShopperState(ShopperStates.ACCEPTED_DELIVERIES))}>accepted deliveries</button>}

        <h1>{getTitle(shopperState)}</h1>
      </div>
      <div className="main_container fit_con">

        {getComponent(shopperState)}
      </div>
    </div>

  );

}
// <button onClick={() => dispatch(setShopperState(ShopperStates.AVAILABLE_DEIVERIES_SHOP))}>available shop deliveries</button>
export default ShopperContainer;