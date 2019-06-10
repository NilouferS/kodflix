function Movie(props) {
    return(
    <div className="item"><img src = {props.logo}  alt = 'The Purge'></img>
      <div className="overlay">
          <h1>{props.name}</h1>
     </div>
    </div>
    );
}