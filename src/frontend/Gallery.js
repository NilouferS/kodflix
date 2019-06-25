import React from 'react';
import getMovies from './get-movie.js';
import './App.css';
import Movie from './Movie.js';

export default class Gallery extends React.Component {
    componentDidMount() {
        fetch('/rest/shows')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
            });
    }
    render() {
    return (
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
       
    );
 }
}
/*id is the url link name*/
