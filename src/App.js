import React from 'react';
import one  from './images/avengers.jpg';
import two from './images/fast.jpg';
import three from './images/harry.jpg';
import four from './images/twlight.jpg';
import five from './images/nemo.jpg';
import six from './images/purge.jpg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          KODFLIX
        </h1>
      <div className="Container">
          <div className="item"><img src = {purge}  alt ='twlight'></img></div>
          <div className="item"><img src = {avenger}   alt ='twlight'></img></div> 
          <div className="item"><img src = {harry} alt ='twlight'></img> </div> 
      </div>
      <div className="Container">
          <div className="item"><img src = {nemo} alt ='twlight'></img></div>
          <div className="item"><img src = {twlight} alt ='twlight'></img> </div>
          <div className="item"><img src = {fast}  alt ='twlight'></img></div>
      </div>
        
      </header>
    </div>
     );
    
 
}

export default App;
