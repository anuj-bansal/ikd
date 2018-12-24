import React, { Component } from 'react';
import { Topbar } from './../components/Topbar';
import { Navbar } from './../components/Navbar';
import { Footer } from './../components/Footer';

import { Home } from './../scenes/Home';
import { AboutUs }  from './../scenes/AboutUs';
import { Contact } from './../scenes/Contact';
import { NotFound } from './../scenes/NotFound';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Topbar />
          <Navbar />
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={AboutUs}></Route>
              <Route exact path='/contact' component={Contact}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}