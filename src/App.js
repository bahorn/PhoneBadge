import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Beowulf Horn',
      interests: ['CovHack 2019'],
      active: 0
    }
  }

  render() {
    return (
      <div className="App">
            <h1>Hi, I'm {this.state.name}</h1>
            <h2>Ask me about {this.state.interests[this.state.active]}</h2>
      </div>
    );
  }
}

export default App;
