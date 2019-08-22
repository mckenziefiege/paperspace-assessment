import React from 'react';
import Photo from '../Images/blank-profile-photo.png';

const UserPhoto = (props) => (
  <div onClick={props.updateModal}>
    <img src={Photo} alt="User"/>
  </div>
);

export default UserPhoto;
