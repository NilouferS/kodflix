import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
//import getMovies from '../get-movie';
import './detail.css';


export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      movie: []
    };
  }
  componentDidMount() {
    fetch('/rest/shows')
            .then(response => response.json())
            .then(shows => {
                let showId = this.props.match.params.movieId;
                let show = shows.find(show => show.id === showId);
                this.setState({ movie: show });
            });
  }

  render() {
    if (this.state.movie === undefined) {
      return <Redirect to='../Not-found'></Redirect>
    }
    else if (this.state.movie.length === 0) {
      return <div></div>
    }
    else {
      return (
       
        <div className='detailCon'>
          <h1 className='heading'>{this.state.movie.name} </h1>
          <div className='detail'>
            <p className='synopsis'>{this.state.movie.synopsis}</p>
            <img className='detailImg'
               src={require(`../images/${this.state.movie.id}.jpg`)}  alt={this.state.movie.id}/>
          </div>
            <h2><Link to='/'>Go To Home</Link></h2>
          </div>
      );
    }

  }
}

