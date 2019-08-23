import React, { Component } from 'react';

import Modal from './Components/Modal.js';
import UserPhoto from './Components/UserPhoto.js';

import './App.css';

class App extends Component {

  state = {
    modalShown: false,
    alerts: [],
    files: {}
  }

  componentDidMount() {
    fetch("https://api.github.com/gists/ab0d7ff570882e888acff25943d1a76e")
      .then(resp => resp.json())
      .then(resp => this.setState({
        files: resp.files["releaseNotes.md"]
      }))

    this.setState({
      alerts: [{"title": "Totally new dashboard", "date": "8/20/2019", "type": "New", "content": "We added this amazing new feature. It lets you do amazing new things and so much more. Try it out today to see for yourself how amazing it is!"}, {"title": "Faster load times", "date": "8/14/2019", "type": "Improvement", "content": "We added this amazing new feature. It lets you do amazing new things and so much more. Try it out today to see for yourself how amazing it is!"}]
    })
  }

  updateModal = () => {
    this.setState({
      modalShown: !this.state.modalShown
    })
  }

  render() {
    console.log(this.state.files.content)
    return (
      <div className="App">
        <UserPhoto updateModal={this.updateModal} alerts={this.state.alerts}/>
        {this.state.modalShown && <Modal alerts={this.state.alerts} updateModal={this.updateModal}/>}
      </div>
    );
  }
}

export default App;
