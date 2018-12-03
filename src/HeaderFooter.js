import React, { Component } from 'react';
import './HeaderFooter.css';
import './App.css';
import './bootstrap.min.css';


export class Header extends Component {
  render() {
    return (
        <div class="container" className="App-header">
            <div class="row">
                <div class="col-sm-4">
                    <a   className="App-header-text"  target="_blank" rel="noopener noreferrer" href="http://maps.google.com/maps?daddr={issaquah kids dentistry 85 NW Alder Pl Suite B, 98027} ">
                    <span class="glyphicon glyphicon-home"></span>&nbsp;&nbsp;85 NW Alder Pl Issaquah WA 98027</a> &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp; &emsp; &emsp;
                </div>
                <div class="col-sm-2">
                    <a  className="App-header-text"  href="tel:425-657-0609">
                    <span class="glyphicon glyphicon-phone"></span> 425-657-0609
                    </a>
                 </div>
                <div class="col-sm-2">
                    <a  className="App-header-text"  href="mailto:Office@IssaquahKidsDentistry.com">
                    <span class="glyphicon glyphicon-envelope">Email</span>
                    </a>                   
                </div>
                <div class="col-sm-2">
                    <a className="App-header-text"  href="./Contactus.html">
                    <span class="glyphicon glyphicon-envelope">ContactUs</span>
                    </a>
                    
                </div>
            </div>
        </div>
        /*
    <div className="App-header">
             <a className="App-header-text" >
             <a   className="App-header-text"  target="_blank" rel="noopener noreferrer" href="http://maps.google.com/maps?daddr={issaquah kids dentistry 85 NW Alder Pl Suite B, 98027} ">
             <span class="glyphicon glyphicon-home"></span>&nbsp;&nbsp;85 NW Alder Pl Issaquah WA 98027</a> &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp; &emsp; &emsp;
             <a  className="App-header-text"  href="tel:425-657-0609">
          <span class="glyphicon glyphicon-phone"></span> 425-657-0609
        </a>  &emsp;
        <a  className="App-header-text"  href="mailto:Office@IssaquahKidsDentistry.com">
        <span class="glyphicon glyphicon-envelope">Email</span>
        </a> &emsp;
        <a className="App-header-text"  href="./Contactus.html">
        <span class="glyphicon glyphicon-envelope">ContactUs</span>
        </a>
        </a>
        </div>
        */
    );
  }
}

export class Footer extends Component {
    render() {
      return (
          <div>
                    <div class="container" className="Body-footer">
        <div class="row">
          <div class="col-sm-4">
            <h1 className="bfooter-color1">New Patient Info</h1>
          </div>
          <div class="col-sm-4">
            <h1 className="bfooter-color2">Patient Education</h1>
          </div>
          <div class="col-sm-4" >
            <h1 className="bfooter-color3">See Our Office</h1> 
          </div>
        </div>
      </div>
        <div class="container" className="App-footer">
            <div class="row">
                <div class="col-sm-4">
                                <iframe  height="200" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336.7348763759892!2d-122.0380236861613!3d47.53121846552163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22ba32d66a8c1df1!2sIssaquah+Kids+Dentistry!5e0!3m2!1sen!2sus!4v1543452588345" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe>
                </div>
                <div class="col-sm-4">
                    <h1 className="blue" >Office Hours</h1>
                    <p>Mon: 8 AM - 5 PM</p>
                    <p>Tue: 8 AM - 5 PM</p>
                    <p>Wed: 8 AM - 5 PM</p>
                    <p>Thurs: 8 AM - 5 PM</p>
                    <p>Fri: 8 AM - 5 PM</p>
                    <p>Sat: 8 AM - 5 PM</p>
                </div>
                <div class="col-sm-4">
                    <h1>Issaquah Kids Dentistry</h1> 
                    <p/>
                    <h3>85 NW Alder Pl Suite B</h3>
                    <h3>Issaquah, WA, 98027</h3>
                    <p>
                        <a>
                            <span class="glyphicon glyphicon-phone"></span>&nbsp; &nbsp; Phone: 425-657-0609
                        </a>
                    </p>
                    <p>
                        <a>
                            <span class="glyphicon glyphicon-print"></span>&nbsp; &nbsp; Fax: 866-528-2025
                        </a>
                    </p>
                    <p>
                        <a  href="mailto:Office@IssaquahKidsDentistry.com">
                        <span class="glyphicon glyphicon-envelope">Office@IssaquahKidsDentistry.com</span>
                        </a> &emsp;
                    </p>
                </div>
            </div>
        </div>
        </div>

      );
    }
  }

  //export default Header;
