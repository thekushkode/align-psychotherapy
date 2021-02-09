import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/Home';
import Services from './components/Services';
import ContactPage from './components/Contact';
import FAQ from './components/FAQ';
import About from './components/About';
import HomeStill from './components/HomeStill';
import Home3 from './components/Home3';


// ReactGA.initialize('UA-178438543-1');
// ReactGA.pageview(window.location.pathname + window.location.search);
// ReactGA.pageview('/');

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomeStill} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/contact' component={ContactPage} />
      <Route exact path='/faq' component={FAQ} />
      <Route exact path='/about' component={About} />
      <Route exact path='/1' component={Home} />
      <Route exact path='/2' component={Home3} />
    </Switch>
  );
}

export default App;
