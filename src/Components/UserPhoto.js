import React from 'react';
import Photo from '../Images/blank-profile-photo.png';

function UserPhoto(props) {
  return (
    <div className="user" onClick={props.updateModal}>
      <img className="user__photo" src={Photo} alt="User"/>
      {props.alerts !== 0 && <div className="user__alerts">{props.alerts}</div>}
    </div>
  );
}

export default UserPhoto;
