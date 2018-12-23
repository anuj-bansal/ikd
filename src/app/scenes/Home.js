import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import gb from './../assets/css/globals';
import { Navbar }  from './../components/Navbar';
import { Topbar } from './../components/Topbar';
import { HomeSlider } from './../components/HomeSlider';
import { Footer } from './../components/Footer';

export class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <Topbar />
        <Navbar />
        
        <div className="container-fluid h-100" style={styles.homeSliderCont}>
          <div className="row align-items-center h-100">
            <div className="m-0 p-0 col-sm-12 col-md-8">
              <HomeSlider />    
            </div>
            <div className="col-sm-12 col-md-4 h-100" style={{ backgroundColor: gb.lightBlack}}>
              <h3 className="text-center" style={styles.featuresHead}>Our Core Features</h3>
              <a className="d-block btn btn-block btn-primary" style={gb.ikdBlueBtn} href="/"> No Cavity Club</a>
              <a className="d-block btn btn-block btn-primary" style={gb.ikdBlueBtn} href="/">Complimentory Visit</a>
              <a className="d-block btn btn-block btn-primary" style={gb.ikdBlueBtn} href="/">Visits Kids Corner</a>
              <p style={styles.socialCont}>
                <a href="/">
                  <FontAwesome
                    name='google'
                    style={styles.icon}
                  />
                </a>
                <a href="/">
                  <FontAwesome
                    name='facebook'
                    size='2x'
                    style={styles.icon}
                  /> 
                </a>
                <a href="/">
                  <FontAwesome
                    name='twitter'
                    style={styles.icon}
                  />
                </a>
              </p>
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

        <Footer />                   
      </div>
    );
  }
};

const styles = {
  icon: {
    color: gb.white,
    fontSize: 40,
    padding: 5,
  },
  homeSliderCont: {
    backgroundColor: gb.lightBlack
  },
  socialCont: {
    padding: 20,
    alignItems: 'center',
    textAlign: 'center'
  },
  featuresHead: { 
    color: gb.white,
    marginBottom: 20,
  }
}

