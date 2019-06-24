import React, { Component } from 'react';
import Gallery from './Gallery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './detail/Details.js';
import NotFound from './Not-found.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:movieId' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

