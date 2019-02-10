import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Socials from './socials';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'B Horn',
      interests: [
        'CovHack 2019',
        'Programming the Vectrex',
        'Robots!'
      ],
      socials: [
        {type: 'Twitter', username: '@baahorn'},
        {type: 'Github', username: '@bahorn'},
      ],
      active: 1
    }
  }

  render() {
    return (
      <div className="App">
            <h1>Hi, I'm {this.state.name}</h1>
            <h2>Ask me about {this.state.interests[this.state.active]}</h2>
            <Socials socials={this.state.socials} />
      </div>
    );
  }
}

export default App;
