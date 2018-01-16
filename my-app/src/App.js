import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my site. It is hosted on a raspberry PI</h1>
        </header>
        <p className="App-intro">
          Raspberry PI is an easy way to setup a development server. Could also be used for continous integration
        </p>
      </div>
    );
  }
}

export default App;
