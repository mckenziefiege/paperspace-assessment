import React from 'react';
import Alert from './Alert.js';

function Modal (props) {
  let alerts = props.alerts.map(alert => <Alert alert={alert} key={alert[1]}/>)

  return (
    <div className="modal">
      <div className="modal__exit" onClick={props.updateModal}>X</div>
      {alerts}
    </div>
  );
}
export default Modal;
