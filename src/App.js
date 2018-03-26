import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Redux App</h1>
        <form>
          <input
            placeholder="Enter text"
          />
          <button
            type="button"
          >
            Button
          </button>
        </form>
      </div>
    );
  }
}

export default App;
