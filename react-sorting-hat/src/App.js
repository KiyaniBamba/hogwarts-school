import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Question from './Components/Questions.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Hogwart</h1>
        </header>

        <Question content="What is your favourite food?" />

      </div>
    );
  }
}

export default App;
