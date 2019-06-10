import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie(props) {
    return(

    <Link to='/details' className="item">
        <img src = {props.logo}  alt = 'The Purge'></img>
        <div className="overlay">
          <h1>{props.name}</h1>
        </div>
    </Link>
    );
}