import React from 'react';
import '../App.css';

import HomeBackground from '../DesignElements/Train.jpg';




function Home () {
    return (
      
      <div className="imgBackground">
        <img src={HomeBackground} alt="logo" />
      
      </div>
    );
  }

export default Home