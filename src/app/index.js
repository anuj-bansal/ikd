import React, { Component } from 'react';


import Routes from './config/routes'; 
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([
  { col: 0 },
  { sm: 540 },
  { md: 768 },
  { lg: 992 },
  { xl: 1200 }
]);

// import MainApp from './config/routes';

export default class App extends Component {

  render() {
    return (
      <BreakpointProvider>
        <Routes />
      </BreakpointProvider>
    );
  }
}
