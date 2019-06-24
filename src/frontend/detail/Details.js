import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getMovies from '../get-movie';
import './detail.css';


export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    }
  }
  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = getMovies().find((movie) => movie.id === movieId);
    this.setState({ movie });
  }

  render() {
    if (this.state.movie === undefined) {
      return <Redirect to='/not-found' />;

    } else {
      return (
        <div className='detailCon'>
          <h1 className='heading'>{this.state.movie.name} </h1>
          <div className='detail'>
            <p className='synopsis'>{this.state.movie.synopsis}</p>
            <img className='detailImg'
              src={this.state.movie.logo}
              alt={this.state.movie.name} />

          </div>
            <h2><Link to='/'>Go To Home</Link></h2>
          </div>
      );
    }

  }
}

