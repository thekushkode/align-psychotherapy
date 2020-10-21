import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/Home';
import Services from './components/Services';
import ContactPage from './components/Contact';
import FAQ from './components/FAQ';
import About from './components/About';


// ReactGA.initialize('UA-178438543-1');
// ReactGA.pageview(window.location.pathname + window.location.search);
// ReactGA.pageview('/');

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/contact' component={ContactPage} />
      <Route exact path='/faq' component={FAQ} />
      <Route exact path='/about' component={About} />
    </Switch>
  );
}

export default App;
