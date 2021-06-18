import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactPage from './components/Contact';
import About from './components/About';
import HomeStill from './components/HomeStill';
import Telehealth from './components/Services';
import Resources from './components/Resources';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomeStill} />
      <Route exact path='/virtual' component={Telehealth} />
      <Route exact path='/contact' component={ContactPage} />
      <Route exact path='/about' component={About} />
      <Route exact path='/resources' component={Resources} />
    </Switch>
  );
}

export default App;
