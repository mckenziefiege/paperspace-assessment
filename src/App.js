import React, { Component } from 'react';
import Modal from './Components/Modal.js';
import UserPhoto from './Components/UserPhoto.js';
import './App.css';

class App extends Component {
  state = {
    modalShown: false,
    alerts: []
  }

  componentDidMount() {
    fetch("https://api.github.com/gists/ab0d7ff570882e888acff25943d1a76e")
      .then(resp => resp.json())
      .then(resp => this.setState({
        alerts: resp.files["releaseNotes.md"]
      }))
  }

  updateModal = () => {
    this.setState({
      modalShown: !this.state.modalShown
    })
  }

  render() {
    const {alerts, modalShown} = this.state

    let arr = alerts.content && alerts.content.split("## ")
    let newArr = arr && arr.filter(val => val !== "")

    function chunkArray(arr, size){
      let length = arr && arr.length;
      let tempArray = [];

      for ( let i = 0; i < length; i += size) {
        let chunk = arr.slice(i, i + size);
        tempArray.push(chunk);
      }
      return tempArray;
    }

    let result = chunkArray(newArr, 4);

    return (
      <div className="App">
        <UserPhoto updateModal={this.updateModal} alerts={result.length}/>
        {modalShown && <Modal alerts={result} updateModal={this.updateModal}/>}
      </div>
    );
  }
}

export default App;
