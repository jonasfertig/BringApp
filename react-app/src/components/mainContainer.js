import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectAppState
} from "../redux/structure/structure.selector";
import { AppStates } from "../redux/structure/structureStates";
import ChoicePage from "./choicePage";
import ShopperContainer from "./Shopper/shopperContainer";
import ClientContainer from "./Client/ClientContainer";
import "./mainContainer.scss";
import Profile from "./profile.js";
function MainContainer() {
    const appState = useSelector(selectAppState);
    
 
function getComponent(appState) {
    switch (appState) {
        case AppStates.CHOICE: return (<ChoicePage />);
        case AppStates.SHOPPER: return (<ShopperContainer />);
        case AppStates.CLIENT: return (<ClientContainer />);
        case AppStates.PROFILE: return (<Profile />)
        default: return;
    }
}


    return (
        <div className="main_container">
            <h1 className="main_title">BringAlongApp</h1>
            {getComponent(appState)}
        </div>
    );
}

export default MainContainer
