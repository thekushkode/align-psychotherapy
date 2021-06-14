import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactPage from './components/Contact';
import About from './components/About';
import HomeStill from './components/HomeStill';
import Telehealth from './components/Services';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomeStill} />
      <Route exact path='/virtual' component={Telehealth} />
      <Route exact path='/contact' component={ContactPage} />
      <Route exact path='/about' component={About} />
    </Switch>
  );
}

export default App;
