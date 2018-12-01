import React, { Component } from 'react';
import logo from './images/IKDLogo.png';
import './App.css';
import './bootstrap.min.css';
import {Header,Footer} from './HeaderFooter.js';

class App extends Component {
  render() {
    return (
<div class="container" className="App">
   <Header/>
<div class="container">



<nav class="navbar navbar-default" className="nav">
    <div class="navbar-header">
    <img className="App-logo" src={logo} alt={"logo"} width="50" height="25"/> 
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>

    <ul class="nav navbar-nav  navbar-right"  className="nav">
      <li class="active"><a href="#">Home</a></li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">New Patient Info 
      /*<span class="caret"></span>*/
      </a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
      <li>
        <a href="#">Emergency Care</a>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-left"  className="nav" >
      <li>      <a href="#">Our Services</a> </li>
      <li>  <a href="#">Finances</a> </li>
      <li>  <a href="#">Patient Education</a> </li>
      <li> <a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>

</nav>
</div>
      <div class="jumbotron text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p> 
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <h3>Column 1</h3>
            <p>Lorem ipsum dolor..</p>
            <p>Ut enim ad..</p>
          </div>
          <div class="col-sm-4">
            <h3>Column 2</h3>
            <p>Lorem ipsum dolor..</p>
            <p>Ut enim ad..</p>
          </div>
          <div class="col-sm-4">
            <h3>Column 3</h3> 
            <p>Lorem ipsum dolor..</p>
            <p>Ut enim ad..</p>
          </div>
        </div>
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
