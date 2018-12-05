import React, { Component } from 'react';
import './../App.css';
import './../bootstrap.min.css';
import {Header,Footer} from '../HeaderFooter';
import {Navigation} from './Navigation';
import {Carousel} from '../Carousel';


export class AboutUsOld extends Component {
    render() {
      return (
            <div class="container" className="App">

                    <div class="jumbotron text-center">
                        <h1>This is About Us Page</h1>
                        <p>Resize this responsive page to see the effect!</p> 
                    </div>
                <Footer/>
            </div>
      )
    }
};


