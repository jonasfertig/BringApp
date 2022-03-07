import React from 'react';
import { useDispatch } from 'react-redux';
import {setClientState} from "../../redux/structure/structure.actions";
import {ClientStates} from "../../redux/structure/structureStates";
import "../../scss/choice.scss";


function CreationChoicePage() {
    const dispatch = useDispatch();
    
    return (     
        <>
            <div className="choice_container creation_choice_container">
                <button className="shopper_button creation_btn" onClick={()=>dispatch(setClientState(ClientStates.CREATE_DELIVERY))}>Create personal list<br/><div>you simply write what you need</div></button>
                <button className="shopper_button creation_btn" onClick={()=>dispatch(setClientState(ClientStates.SHOP_CREATE_DELIVERY))}>Create Edeka list<br/><div>choose articles available in Edeka shops</div></button>
            </div>    
            <button onClick={() => dispatch(setClientState(ClientStates.MY_DELIVERY))}>back</button>
        </>
    );
}

export default CreationChoicePage;
