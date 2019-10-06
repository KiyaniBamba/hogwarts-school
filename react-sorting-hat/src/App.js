import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Home.js';
import AppContent from './AppContent.js';


const App =() => {

    return (
      <div >
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/quiz" component={AppContent}/>
      </Router>
      </div>
    );
}

export default App;