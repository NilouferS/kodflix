import React from 'react';
//import getMovies from './get-movie.js';
import './App.css';
import Movie from './Movie.js';

export default class Gallery extends React.Component {
    constructor() {
        super();
        this.state = { shows: [] };
    }

    componentDidMount() {
        fetch('/rest/shows')
        .then(response => response.json())
        .then(shows => this.setState({ shows }));
    }
    render() {
    return (
        <div className="Container">
                {
                       this.state.shows.map(movie => {
                           return ( 
                            <Movie 
                                key={movie.id} 
                                id={movie.id}
                                title={movie.title} 
                                name={movie.name}
                             />);
                        })
                        
                }
        </div>
       
    );
 }
}
/*id is the url link name*/
