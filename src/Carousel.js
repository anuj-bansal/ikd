import React, { Component } from 'react';
import img1 from './images/image1.jpeg';
import img2 from './images/image2.jpeg';
import img3 from './images/image3.jpeg';
import img4 from './images/image4.jpeg';
import img5 from './images/image5.jpeg';
import './App.css';
import './bootstrap.min.css';



export class Carousel extends Component {
  render() {
    return (
<div class="container">
   <div >
     <div class="appointment wow fadein" >
        <h1>Now Open and Accepting New Patients  Book appointment
        </h1>
      </div>
           <div class="row">
                <div class="col-sm-8">
                  <div id="myCarousel" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                      <li data-target="#myCarousel" data-slide-to="2"></li>
                      <li data-target="#myCarousel" data-slide-to="3"></li>
                      <li data-target="#myCarousel" data-slide-to="4"></li>
                      </ol>

                  <div class="carousel-inner" role="listbox">

                      <div class="item active">
                        <img src={img1}  />
                      </div>

                      <div class="item">
                      <img src={img2}/>
                      </div>

                      <div class="item">
                      <img src={img3}/>
                      </div>

                      <div class="item">
                      <img src={img4} />
                      </div>

                      <div class="item">
                      <img src={img5} />
                      </div>
                   </div>

                  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                  </a>
                  </div>
                </div>
                <div class="col-sm-4">
                      <div >
                      <img src={img5} widht="400" height="400"/>
                      </div>
                 </div>
             </div>
        </div>
</div>
    );
  }
}

