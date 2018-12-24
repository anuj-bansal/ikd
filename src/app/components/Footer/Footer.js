import React from 'react';
import  FontAwesome from 'react-fontawesome';
import { QuickLinks } from './../../config/navItems';
import styles from './styles';

const Footer = () =>{
  return(
    <section className="footer" style={styles.container}id="footer">
      <div className="container-fluid">
        <div className='row'>
          <div className="col-sm-4 text-center text-sm-left">
            <p>
              <a className="navbar-brand navbar-brand-centered" href="/" style={styles.logo}> <img className="img-thumbnail img-fluid d-inline-block" src={require('./../../assets/images/issaquahkidsdentistry-logo.png')} alt="IKD Logo"/> </a>
            </p>
            <div style={styles.infoBox}>
              <p className="phone" style={styles.infoItem}>
                <a href="tel:(419) 405-7171" style={styles.phone} >
                  <FontAwesome
                    name='phone'
                    style={styles.icon}
                  />
                  (419) 405-7171
                </a>
              </p>
              <p className="phone" style={{...styles.infoItem,  } }>
                <a href="mailto:info@fireflysmiles.com" style={styles.email} >
                  <FontAwesome
                    name='envelope'
                    style={styles.icon}
                  />
                  info@fireflysmiles.com
                </a>
              </p>
              <p className="phone" style={styles.infoItem}>
                <a href="/" style={styles.address} >
                  <FontAwesome
                    name='map-marker'
                    style={styles.icon}
                  />
                  10005 Fremont Pike Perrysburg, OH 43551
                </a>
              </p>
            </div>
          
          </div>
          <div className="col-sm-4 text-center text-sm-left">
            <h3 style={styles.heading}>Quick Links</h3>
            <ul className="list-inline">
              {
                QuickLinks.map( (item, index) =>{
                  return <li className="text-center text-sm-left" style={styles.link} key={index}> <a style={styles.link} href={item.link}>{item.name}</a></li>
                })
              }
            </ul>
          </div>
          <div className="col-sm-4 text-center text-sm-left">
            <h3 style={styles.heading}>Office Hours</h3>
            <p style={styles.txt}>Mon: 8 AM - 5 PM</p>
            <p style={styles.txt}>Tue: 8 AM - 5 PM</p>
            <p style={styles.txt}>Wed: 8 AM - 5 PM</p>
            <p style={styles.txt}>Thurs: 8 AM - 5 PM</p>
            <p style={styles.txt}>Fri: 8 AM - 5 PM</p>
            <p style={styles.txt}>Sat: 8 AM - 5 PM</p>
          </div>
        </div>       
        <div className="row ">
          <div className="col-12">
            <li className="dropdown-divider"></li>
            <p className="text-center" style={styles.credits}>
              Designed by: <a href="https://morosoft.pk" target="_blank"> Morosoft</a> - © 2018. All rights reserved!
            </p>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Footer;