import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie(props) {
    return(

    <Link to={`/${props.id}`} className="item">
        <img src={require(`./images/${props.id}.jpg`)}  alt={props.id}></img>
        <div className="overlay">
          <h1>{props.name}</h1>
        </div>
        
    </Link>
    );
}