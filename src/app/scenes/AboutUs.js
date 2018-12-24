import React, { Component } from 'react';
import { PageHeader } from './../components/PageHeader';
import gb from './../assets/css/globals';

export class AboutUs extends Component {
  render() {
    return (
      <div className="main-container">
        <PageHeader title="About" subTitle="Learn More About Us" />
        <div class="container-fluid">
          <div className="row">
            <div className="col m-0 p-0">
              <div class="jumbotron text-center m-0">
                <h1>Contact Us </h1>
                <p>This is contact page</p> 
              </div>
            </div>  
          </div>
        </div>
      </div>
    );
  }
};

const styles = {
  
}


