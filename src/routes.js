"use strict";

import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./app')}>
    <DefaultRoute handler={require('./HomePage')}/>
    <Route name="aboutus" handler={require('./Navigation/AboutUsold')}/>
    </Route>
);

module.exports 