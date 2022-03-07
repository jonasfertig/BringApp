import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAppState } from "../redux/structure/structure.actions";
import { AppStates } from "../redux/structure/structureStates";
import "../scss/choice.scss";
import UserService from "../services/UserService.js"
import { fetchUser } from "../redux/structure/structure.actions";

function ChoicePage() {
    const dispatch = useDispatch();
    const user_name = UserService.getUsername();
    useEffect(() => {
        dispatch(fetchUser(user_name));
    }, [dispatch, user_name]);
    return (
        <>
            <div className="choice_container">
                <button className="shopper_button" onClick={() => dispatch(setAppState(AppStates.CLIENT))}>Client</button>
                <button className="shopper_button" onClick={() => dispatch(setAppState(AppStates.SHOPPER))}>Shopper</button>
            </div>
            <button className="logout_button" onClick={UserService.doLogout}>Logout</button>
            <button onClick={()=>dispatch(setAppState(AppStates.PROFILE))}>Profile</button>
        </>
    );
}

export default ChoicePage;
