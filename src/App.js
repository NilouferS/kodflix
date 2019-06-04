import React from 'react';
import avenger from './images/avengers.jpg';
import fast from './images/fast.jpg';
import harry from './images/harry.jpg';
import twlight from './images/twlight.jpg';
import nemo from './images/nemo.jpg';
import purge from './images/purge.jpg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          KODFLIX
        </h1>
      <div className="Container">
          <div className="item"><img src = {purge}  alt = 'The Purge'></img></div>
          <div className="item"><img src = {avenger}   alt = 'Avengers'></img></div> 
          <div className="item"><img src = {harry} alt = 'Harry Potter '></img> </div> 
      </div>
      <div className="Container">
          <div className="item"><img src = {nemo} alt = 'Finding Nemo'></img></div>
          <div className="item"><img src = {twlight} alt = 'Twlight'></img> </div>
          <div className="item"><img src = {fast}  alt = 'Fast and Furious'></img></div>
      </div>
      </header>
    </div>
     );
    
 
}

export default App;
