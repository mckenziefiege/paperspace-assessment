import React, { Component } from 'react';

import Modal from './Components/Modal.js';
import UserPhoto from './Components/UserPhoto.js';

import './App.css';

class App extends Component {

  state = {
    modalShown: false
  }

  updateModal = () => {
    this.setState({
      modalShown: !this.state.modalShown
    })
  }

  render() {
    console.log(this.state.modalShown)
    return (
      <div className="App">
        <UserPhoto updateModal={this.updateModal}/>
        {this.state.modalShown && <Modal />}
      </div>
    );
  }
}

export default App;
