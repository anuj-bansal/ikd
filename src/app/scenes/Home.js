import React, { Component } from 'react';
import { Navbar }  from './../components/Navbar';
import { Topbar } from './../components/Topbar';
import { HomeSlider } from './../components/HomeSlider'

export class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <Topbar />
        <Navbar />
        
        <div className="container-fluid">
          <div className="row">
            <div className="m-0 p-0 col-sm-12 col-md-8">
              <HomeSlider />    
            </div>
            <div className="col-sm-12 col-md-4 ikd-yellow">
              <h1>My First Bootstrap Page -  Hello </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="jumbotron text-center">
            <h1>My First Bootstrap Page -  Hello </h1>
            <p>Resize this responsive page to see the effect!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sequi nesciunt esse sapiente aspernatur eveniet tempora qui aperiam aut! Eos culpa esse quisquam nobis nostrum debitis dicta quasi, tenetur nesciunt.</p>
          </div>
        </div>

        <div className="container">
          <div className="jumbotron text-center">
            <h1>My First Bootstrap Page -  Hello </h1>
            <p>Resize this responsive page to see the effect!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sequi nesciunt esse sapiente aspernatur eveniet tempora qui aperiam aut! Eos culpa esse quisquam nobis nostrum debitis dicta quasi, tenetur nesciunt.</p>
          </div>
        </div>

        <div className="container">
          <div className="jumbotron text-center">
            <h1>My First Bootstrap Page -  Hello </h1>
            <p>Resize this responsive page to see the effect!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sequi nesciunt esse sapiente aspernatur eveniet tempora qui aperiam aut! Eos culpa esse quisquam nobis nostrum debitis dicta quasi, tenetur nesciunt.</p>
          </div>
        </div>                        
      </div>
    );
  }
};


