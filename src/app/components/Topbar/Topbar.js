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
                85 NW Alder PI Suite B
              </p>
          </div>
          <div className="col-sm-12 col-md-4">
            <p className="text-center" >
              <a href="tel:+1 425-657-0609" style={styles.phone} >
                <FontAwesome
                  name='mobile-phone'
                  size='2x'
                  style={styles.icon}
                />
                +1 425-657-0609
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