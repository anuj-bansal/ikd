import React, { Component } from 'react';
import logo from './../images/IKDLogo.png';
import './Navigation.css';
import './../bootstrap.min.css';


export class Navigation extends Component {
  render() {
    return (
    <div class="container"  className="nav">
        <nav class="navbar navbar-default" className="nav">
            <div class="navbar-header">
            <img className="App-logo" src={logo} alt={"logo"} width="75" height="35" href="#"/> 
            </div>

            <ul class="nav navbar-nav  navbar-right"  className="nav">
                <li class="active">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Us</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Our Dentist</a></li>
                        <li><a href="#">Our Office</a></li>
                        <li><a href="#">Location</a></li>
                    </ul>            
                </li>
                <li class="active"><a href="#">New Patient Forms</a>
                </li>
                <li>
                    <a href="#">Emergency Care</a>
                </li>
            </ul>

            <ul class="nav navbar-nav navbar-left"  className="nav" >
                <li>      <a href="#"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        Our Services</a> 
                        <ul class="dropdown-menu">
                            <li><a href="#">Early Childhood Visit</a></li>
                            <li><a href="#"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                Preventive Care</a>
                                <ul class="dropdown-menu">
                                <li><a href="#">Sealants</a></li>
                                <li><a href="#">Flouride Treatment</a></li>
                                <li><a href="#">Digital X-rays</a></li>
                                <li><a href="#">Mouth Gaurd</a></li>
                                <li><a href="#">SDF - Smart Flouride</a></li>
                                <li><a href="#">Habit Preventing Appliance</a></li>
                                </ul>            
                            </li>
                            <li><a href="#">Filing &amp; Restorative Care</a></li>
                            <li><a href="#">Crowns &amp; Tooth Colored Filing</a></li>
                            <li><a href="#"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                Sedation</a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Nitrous Oxide</a></li>
                                    <li><a href="#">Genral Anesthesia</a></li>
                                </ul>            
                            </li>
                            <li><a href="#">Hospital Dentistry</a></li>
                            <li><a href="#">Special Needs Children</a></li>
                        </ul>
                </li>
                <li>  <a href="#">Finances</a> </li>
                <li>  <a href="#"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        Patient Education</a> 
                        <ul class="dropdown-menu">
                            <li><a href="#">Why Pediatric Dentist</a></li>
                            <li><a href="#"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Early Dental Care</a>
                                <ul class="dropdown-menu">
                                <li><a href="#">First Visit</a></li>
                                <li><a href="#">Thumb &amp; Finger Sucking</a></li>
                                </ul>            
                            </li>
                            <li><a href="#"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Preventive Care</a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Flouride</a></li>
                                    <li><a href="#">Sealants</a></li>
                                </ul>            
                            </li>
                        </ul>
                </li>
            </ul>

        </nav>
    </div>
    );
  }
}


