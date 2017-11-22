import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src= "https://ibb.co/erJXCm" alt="sorr-y"/>
          <h1 className="App-title">Amazing Grace Honey</h1>
        </header>
        <button>Home</button>
        <button>About</button>
        <button>Blog</button>
        <button>Products</button>
        <button>BeeCam</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          

        </p>
      </div>
    );
  }
}

export default App;
