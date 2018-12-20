import React, { Component } from 'react';
import { Navbar }  from './../components/Navbar';

export class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <Navbar/>
        <div className="container">
          <div className="jumbotron text-center">
            <h1>My First Bootstrap Page -  Hello </h1>
            <p>Resize this responsive page to see the effect!</p> 
          </div>
        </div>
      </div>
    );
  }
};


