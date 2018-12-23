import React, { Component } from 'react';
import Breakpoint from 'react-socks';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import styles from './styles';

class HomeSlider extends Component{
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };

  render(){
    let { leftIcon, rightIcon } = this.state;
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="m-0 p-0 col-12">
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={50000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
              <div style={styles.slide}>
                <img
                  className="d-block mw-100 mh-100"
                  src={require('./../../assets/images/Slider-01.jpg')}
                  alt="Mr Dj"
                />
                <div className="carousel-caption d-block mx-auto" style={styles.caption}>
                  <Breakpoint col only>
                    <div>
                      <h6 style={styles.capHeading}>Now Open & accepting new patients</h6>
                      <p style={styles.capText}><a href="/" className="btn btn-primary" style={styles.gb.ikdBlueBtn}>Book Appoitment</a></p>
                    </div>
                  </Breakpoint>
                  <Breakpoint sm up>
                    
                    <h4 style={styles.capHeading}>Now Open & accepting new patients</h4>
                    <p style={styles.capText}><a href="/" className="btn btn-primary" style={styles.gb.ikdBlueBtn}>Book Appoitment</a></p>
                  </Breakpoint>
                </div>
              </div>
              
              <div style={styles.slide}>
                <img
                  className="d-block mw-100 mh-100"
                  src={require('./../../assets/images/Slider-1d.jpg')}
                  alt="Mr Dj"
                />
                  <div className="carousel-caption d-block mx-auto" style={styles.caption}>
                    <Breakpoint col only>
                      <div>
                        <h6 style={styles.capHeading}>SNow Open & accepting new patients</h6>
                        <p style={styles.capText}><a href="/" className="btn btn-primary" style={styles.gb.ikdBlueBtn}>S-Book Appoitment</a></p>
                      </div>
                    </Breakpoint>
                    <Breakpoint sm up>
                      
                      <h4 style={styles.capHeading}>Now Open & accepting new patients</h4>
                      <p style={styles.capText}><a href="/" className="btn btn-primary" style={styles.gb.ikdBlueBtn}>Book Appoitment</a></p>
                    </Breakpoint>
                  </div>
              </div>

              <div style={styles.slide}>
                <img
                  className="d-block mw-100 mh-100"
                  src={require('./../../assets/images/hero.jpg')}
                  alt="Mr Dj"
                />
                  <div className="carousel-caption d-block mx-auto" style={styles.caption}>
                    <Breakpoint col only>
                      <div>
                        <h6 style={styles.capHeading}>SNow Open & accepting new patients</h6>
                        <p style={styles.capText}><a href="/" className="btn btn-primary" style={styles.gb.ikdBlueBtn}>S-Book Appoitment</a></p>
                      </div>
                    </Breakpoint>
                    <Breakpoint sm up>
                      
                      <h4 style={styles.capHeading}>Now Open & accepting new patients</h4>
                      <p style={styles.capText}><a href="/" className="btn btn-primary" style={styles.gb.ikdBlueBtn}>Book Appoitment</a></p>
                    </Breakpoint>
                  </div>
              </div>
            </RBCarousel>
          </div>
        </div>
      </div>
    );
  }
};

export default HomeSlider;