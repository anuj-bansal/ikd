import React, { Component } from 'react';
//import logo from './images/IKDLogo.png';
import logo from './images/IKDLogo.png';
import img1 from './images/image1.jpeg';
import img2 from './images/image2.jpeg';
import img3 from './images/image3.jpeg';
import img4 from './images/image4.jpeg';
import img5 from './images/image5.jpeg';
import './App.css';
import './bootstrap.min.css';
import {Header,Footer} from './HeaderFooter.js';
import {Navigation} from './Navigation/Navigation.js';
import {Carousel} from './Carousel.js';


class App extends Component {
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
