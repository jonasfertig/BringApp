import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../redux/structure/structure.selector";
import {fetchUser} from "../redux/structure/structure.actions";
import UserService from "../services/UserService";
function Profile() {
  const dispatch = useDispatch();
  const user_name = UserService.getUsername();
  useEffect(() => { 
    dispatch(fetchUser(user_name));  
     }, [dispatch]);
  const user = useSelector(selectUser);
    return(
      <>
        <h2>Profile</h2>
        <div className="profile-container">
          <div className="profile-line">
            <p>User :</p>
            <p>{user.username}</p>
          </div>
          <div className="profile-line">
            <p>Email :</p>
            <p>{user.email}</p>
          </div>
          <div className="profile-line">
            <p>Phone number :</p>
            <p>{user.cellphone}</p>
          </div>
          <div className="profile-line">
            <p>Adresse :</p>
            <p>{user.street}{user.house_number}{", "}{user.city}</p>
          </div>
        </div>
      </>
    );
};

export default Profile;