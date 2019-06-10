import React from 'react';
import avenger from './images/avengers.jpg';
import fast from './images/fast.jpg';
import harry from './images/harry.jpg';
import twlight from './images/twlight.jpg';
import nemo from './images/nemo.jpg';
import purge from './images/purge.jpg';
import './App.css';
import Movie from './Movie.js';

export default function Gallery(){
    return (
            <div>
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
            </div>
     );
}