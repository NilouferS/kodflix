import React from 'react';
import getMovies from './get-movie.js';
import './App.css';
import Movie from './Movie.js';

export default function Gallery() {
    return (
        <div>
            <div className="Container">
                {
                    getMovies().map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            name={movie.name}
                            logo={movie.logo} />
                    ))
                }
            </div>
        </div>
    );
}
/*id is the url link name*/
