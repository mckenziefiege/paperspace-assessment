import React from 'react';

function UserPhoto(props) {
  return (
    <div className="user" onClick={props.updateModal}>
      <img className="user__photo" src="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/cola-0247.jpg?crop=0.668xw:1.00xh;0.151xw,0&resize=480:*" alt="User"/>
      {props.cookies.cookies.onboarded !== "true" && <div className="user__alerts">{props.alerts}</div>}
    </div>
  );
}

export default UserPhoto;
