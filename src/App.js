import React from 'react';
import avenger from './images/avengers.jpg';
import fast from './images/fast.jpg';
import harry from './images/harry.jpg';
import twlight from './images/twlight.jpg';
import nemo from './images/nemo.jpg';
import purge from './images/purge.jpg';
import './App.css';
import Movie from './Movie.js';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          KODFLIX
        </h1>
      <div className="Container">
          <Movie name='The Purge' logo={ purge } />
          <Movie name='Avengers' logo={ avenger} />
          <Movie name='Harry Potter' logo={ harry } />
      </div>
      <div className="Container">
          <Movie name='Finding Nemo' logo={ nemo } />
          <Movie name='Twlight' logo={ twlight} />
          <Movie name='Fast and Furious' logo={ fast } />
      </div>
      </header>
      
    </div>
     );
}
}

export default App;

// function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <h1>
  //           KODFLIX
  //         </h1>
  //       <div className="Container">
  //           <div className="item"><img src = {purge}  alt = 'The Purge'></img>
  //             <div className="overlay">
  //                 <h1>The Purge</h1>
  //             </div>
  //           </div>
  //           <div className="item"><img src = {avenger}   alt = 'Avengers'></img>
  //              <div className="overlay">
  //                 <h1>Avengers</h1>
  //             </div>
  //           </div> 
  //           <div className="item"><img src = {harry} alt = 'Harry Potter '></img> 
  //             <div className="overlay">
  //                 <h1>Harry Potter</h1>
  //             </div>
  //           </div> 
  //       </div>
  //       <div className="Container">
  //           <div className="item"><img src = {nemo} alt = 'Finding Nemo'></img>
  //             <div className="overlay">
  //                 <h1>Finding Nemo</h1>
  //             </div>
  //           </div>
  //           <div className="item"><img src = {twlight} alt = 'Twlight'></img> 
  //             <div className="overlay">
  //                 <h1>Twlight</h1>
  //             </div>
  //           </div>
  //           <div className="item"><img src = {fast}  alt = 'Fast and Furious'></img>
  //            <div className="overlay">
  //                 <h1>Fast and Furious</h1>
  //             </div>
  //           </div>
  //       </div>
  //       </header>
  //       <Movie />
  //     </div>
  //      );
  // }