import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import {Banner, Navigation} from './app/pages/Home';
import List from './app/pages/List';
import Team from './app/pages/Team';
//import Navigation from './app/pages/Home';
//import Banner from './app/pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path = '/Team'>
            
            <Team></Team>
          </Route>
          <Route path='/List'>
            <Banner></Banner>
            <List></List>
          </Route>
          <Route path='/Home'>
            <Banner></Banner>
            <Navigation></Navigation>
            <List></List>
          </Route>
        </Switch>
      </Router>
    );
  }
  
}
export default App;
