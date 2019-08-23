import React from 'react';
import Photo from '../Images/blank-profile-photo.png';

function UserPhoto(props) {
  let num = props.alerts.length

  return (
    <div className="user" onClick={props.updateModal}>
      <img className="user__photo" src={Photo} alt="User"/>
      {props.alerts !== 0 && <div className="user__alerts">{num}</div>}
    </div>
  );

}

export default UserPhoto;
