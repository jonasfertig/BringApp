import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ClientStates, AppStates } from "../../redux/structure/structureStates";
import { selectClientState} from "../../redux/structure/structure.selector";
import { setAppState, setClientState, fetchUser } from "../../redux/structure/structure.actions";
import { selectLists } from '../../redux/lists/lists.selector';
import ShoppingList from "./viewing.js"
import GroceryList from "./groceryList"
import Confirmation from "./confirmation"
import MyList from "./myList"
import ShopConfirmation from '../Shop/shopConfirmation';
import ShopGroceryList from '../Shop/shopGroceryList';
import ShopShoppingList from '../Shop/shopViewing';
import CreationChoicePage from './creationchoicePage';
import "../mainContainer.scss";
import "../Shopper/shopper.scss";
import "./client.scss";
import UserService from '../../services/UserService';

function ClientContainer() {

  const dispatch = useDispatch();
  const user_name = UserService.getUsername();
  // on startup -> dispatches user to redux store
  useEffect(() => {
    dispatch(fetchUser(user_name));
  }, [dispatch, user_name]);

  const clientState = useSelector(selectClientState);
  // switch through components
  const clientList = useSelector(selectLists);
  function getComponent(clientState) {
    switch (clientState) {
      case ClientStates.CREATE_DELIVERY: return (<div className="creation_container"><GroceryList /><div className="spacer" /><ShoppingList /></div>);
      case ClientStates.CONFIRM_LIST: return (<Confirmation />)
      case ClientStates.MY_DELIVERY: return (<MyList />)
      case ClientStates.SHOP_CREATE_DELIVERY: return (<div className="creation_container"><ShopGroceryList /><div className="spacer" /><ShopShoppingList /></div>);
      case ClientStates.SHOP_CONFIRM_LIST: return (<ShopConfirmation />)
      case ClientStates.CREATION_CHOICE: return (<CreationChoicePage />)
      default: return;
    }
  }
  // switch titles
  function getTitle(clientState) {
    switch (clientState) {
      case ClientStates.CREATE_DELIVERY: return ("Create Delivery");
      case ClientStates.CONFIRM_LIST: return ("Confirm List")
      case ClientStates.MY_DELIVERY: return ("My Delivery")
      default: return;
    }
  }
  // show relevant buttons
  const shouldShowCreate = () => {
    if (clientState !== ClientStates.MY_DELIVERY) {
      return false;
    } if (!clientList[0]) {
      return true;
    }
    if (clientList[0].length === 0) {
      return true;
    }

    return false;
  }
  return (
    <div className="user_container">
      <div className="navbar">
        <button onClick={() => dispatch(setAppState(AppStates.CHOICE))}>home</button>
        {shouldShowCreate() ? <button onClick={() => dispatch(setClientState(ClientStates.CREATION_CHOICE))}>Create Delivery</button> : null}
        {clientState !== ClientStates.MY_DELIVERY ? <button onClick={() => dispatch(setClientState(ClientStates.MY_DELIVERY))}>my list</button> : null}
        <h1>{getTitle(clientState)}</h1>
      </div>
      <div className="main_container fit_con">

        {getComponent(clientState)}
      </div>
    </div>

  );

}

export default ClientContainer;
