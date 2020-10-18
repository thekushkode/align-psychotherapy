import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/Home';


// ReactGA.initialize('UA-178438543-1');
// ReactGA.pageview(window.location.pathname + window.location.search);
// ReactGA.pageview('/');

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  );
}

export default App;
