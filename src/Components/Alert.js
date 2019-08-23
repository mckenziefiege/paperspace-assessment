import React from 'react';

const Alert = (props) => (
  <div className="alert">
    <div>
      <p>{props.alert.date}</p>
    </div>
    <div>
      <h1>{props.alert.title}</h1>
      <p className={props.alert.type === "New" ? "alert__type alert__type--blue" : "alert__type alert__type--green"}>{props.alert.type}</p>
      <p>{props.alert.content}</p>
    </div>
  </div>
);

export default Alert;
