import React, { Component } from 'react';
import { Navbar }  from './../components/Navbar';
import { Topbar } from './../components/Topbar'

export class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <Topbar />
        <Navbar/>

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


