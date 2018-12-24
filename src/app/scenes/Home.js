import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import gb from './../assets/css/globals';
import { IKDMap } from './../components/IKDMap';
import { HomeSlider } from './../components/HomeSlider';

export class Home extends Component {
  render() {
    return (
      <div className="main-container">
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

        <div className="container-fluid" style={{...styles.aboutCont, ...gb.yellowBack}}>
          <div className="row" >
            <div className="col-sm-4"  style={{ ...styles.aboutInfoItem, ...gb.blueBack }}>
              <h3 className="text-center"><a  className="text-center" href="/" style={styles.heading}>Why We Are Different</a></h3>
              {/* <h3 className="text-center"><a className="btn btn-primary" style={gb.ikdBlueBtn} href="/"> No Cavity Club</a></h3> */}
            </div>
            <div className="col-sm-4" style={{ ...styles.aboutInfoItem, ...gb.yellowBack }}>
              <h3 className="text-center"><a  className="text-center" href="/" style={styles.heading}>New Patients</a></h3>
              {/* <h3 className="text-center"><a className="btn btn-primary" style={gb.ikdBlueBtn} href="/"> No Cavity Club</a></h3> */}
            </div>
            <div className="col-sm-4" style={{ ...styles.aboutInfoItem, ...gb.blueBack }}> 
              <h3 className="text-center"><a  className="text-center" href="/" style={styles.heading}>Our Office</a></h3>
              {/* <h3 className="text-center"><a className="btn btn-primary" style={gb.ikdBlueBtn} href="/"> No Cavity Club</a></h3> */}
            </div>
            
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center" style={{ background: '#f8f9fa', ...styles.partnerCont}}>
              <img style={styles.partnerImg} src={require("./../assets/images/assoc-1.png")} alt="Our Partners"/>
              <img style={styles.partnerImg} src={require("./../assets/images/assoc-2.png")} alt="Our Partners"/>
              <img style={styles.partnerImg} src={require("./../assets/images/assoc-3.png")} alt="Our Partners"/>
              <img style={styles.partnerImg} src={require("./../assets/images/assoc-4.png")} alt="Our Partners"/>
              <img style={styles.partnerImg} src={require("./../assets/images/assoc-5.png")} alt="Our Partners"/>
            </div>
          </div>
        </div>
        <IKDMap />
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
  },
  aboutInfoItem:{
    padding: 10,
  },
  heading:{
    color: gb.white,
  },
  partnerImg: {
    padding: 10,
  },
  partnerCont:{
    padding: 40,
  }
}