import React from 'react';
import Alert from './Alert.js';

function Modal (props) {
  let length = props.alerts.length
  let alerts = props.alerts.map((alert, i) => <Alert alert={alert} border={i !== length - 1 ? true : false} key={alert[1]}/>)

  return (
    <div className="modal">
      <div className="modal__exit" onClick={props.updateModal}>X</div>
      <div className="modal__alerts-container">
        {alerts}
      </div>
    </div>
  );
}
export default Modal;
