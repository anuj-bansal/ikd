import React, { Component} from 'react';
import  FontAwesome from 'react-fontawesome';
import styles from './styles';

class Topbar extends Component {
  
  render(){
    return(
      <div className="container-fluid" style={styles.topbarCont} >
        <div className="row text-center">
          <div className="col-sm-12 col-md-4">
              <p className="text-center" style={styles.address}>
                <FontAwesome
                  name='map-marker'
                  size='2x'
                  style={styles.icon}
                />
                10005 Fremont Pike, Perrysburg, OH 43551
              </p>
          </div>
          <div className="col-sm-12 col-md-4">
            <p className="text-center" >
              <a href="tel:(419) 405-7171" style={styles.phone} >
                <FontAwesome
                    name='mobile-phone'
                    size='2x'
                    style={styles.icon}
                  />
                (419) 405-7171
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-md-4">
            <a className="btn btn-primary text-center" 
              style={styles.aptBtn} href="/">
              <FontAwesome
                name='calendar-plus-o'
                style={styles.icon}
              />
              Book Appointment
            </a>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;