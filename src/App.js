import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import './App.css';
import './bootstrap.min.css';
import {Home} from './HomePage'; 
import {AboutUs} from './Navigation/AboutUs';

class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Switch>
        <Route path="/" component={Home}/>
        <Route path="/foo" component={AboutUs}/>
        <Route path="/AboutUs" component={AboutUs}/>
        </Switch>
        </div>
        /*

*/
      /*
      <div className="App">
        <p>hi there</p>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      */
    );
  }
}

export default App;
