import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import {Header,Footer} from './HeaderFooter';
import {Navigation} from './Navigation/Navigation.jsx';
import {Carousel} from './Carousel';


export class Home extends Component {
    render() {
      return (
            <div class="container" className="App">
            <Header/>
            <Navigation/>
            <Carousel/>
                <div class="jumbotron text-center">
                    <h1>My First Bootstrap Page</h1>
                    <p>Resize this responsive page to see the effect!</p> 
                </div>


                <Footer/>
            </div>
      )
    }
};


