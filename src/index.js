import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute} from 'react-router';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Home} from './HomePage'; 
import {AboutUs} from './Navigation/AboutUs.jsx'

import { createBrowserHistory } from 'history'
import {BrowserRouter} from 'react-router-dom';

export default createBrowserHistory();

const browserHistory = createBrowserHistory();

ReactDOM.render(<BrowserRouter><app/></BrowserRouter> ,
   document.getElementById('root') );

render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Home}/>
            <Route path="/foo" component={AboutUs}/>
            <Route path="/aboutus" component={AboutUs}/>
        </Route>
    </Router>, document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
