import React, { Component } from 'react';

// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";

const styles = { height: 400, width: "100%" };

class HomeSliderTest extends Component{

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
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
    rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
    this.setState({ leftIcon, rightIcon });
  };

  render(){
    let { leftIcon, rightIcon } = this.state;
  
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" style={{ paddingTop: "20px" }}>
            <div className="btn-group">
              <button className="btn btn-primary" onClick={this._changeIcon}>
                Change Icon
              </button>
              <button className="btn btn-primary" onClick={this.slidePrev}>
                Slider prev
              </button>
              <button className="btn btn-primary" onClick={this.slideNext}>
                Slider next
              </button>
              <button className="btn btn-primary" onClick={this.goToSlide}>
                Go to slide 4
              </button>
              <button className="btn btn-primary" onClick={this.autoplay}>
                {this.state.autoplay ? "Stop Autoplay" : "Start Autoplay"}
              </button>
            </div>
          </div>
          <div className="col-12" style={{ paddingTop: "20px" }}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
              <div style={{ height: 400 }}>
                <img
                  className="d-block w-100"
                  style={{ width: "100%", height: "100%" }}
                  src={require('./../../assets/images/Slider-01.jpg')}
                  alt="Mr Dj"
                />
                <div className="carousel-caption">Image</div>
              </div>

              <div style={{ ...styles, backgroundColor: "aqua" }}>
                <video className="carousel-center" controls style={{ width: "75%" }} height="250">
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
                <div className="carousel-caption">Video</div>
              </div>

              <div style={{ height: 400, width: "100%", backgroundColor: "lightpink" }}>
                <div className="carousel-center">center Text</div>
                <div className="carousel-caption">Text</div>
              </div>

              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <span>text</span>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <div className="carousel-center">

                </div>
                <div className="carousel-caption">Youtube</div>
              </div>
            </RBCarousel>
          </div>
          <div className="col-12" style={{ marginTop: 20 }}>
            <RBCarousel
              version={4}
              autoplay={this.state.autoplay}
              pauseOnVisibility={true}
              onSelect={this.visiableOnSelect}
              slideshowSpeed={2000}
            >
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <div className="carousel-center">
                  <div>This carsouel won't change if invisiable</div>
                  <div>pauseOnVisibility = true</div>
                </div>
                <div className="carousel-center"> </div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <div className="carousel-center">
                  <div>This carsouel won't change if invisiable</div>
                  <div>pauseOnVisibility = true</div>
                </div>
                <div className="carousel-caption">Text</div>
              </div>
            </RBCarousel>
          </div>
          <div className="col-12" span={12} style={{ paddingTop: "20px" }}>
            <RBCarousel version={4} className="carousel-fade">
              <div style={{ ...styles, backgroundColor: "darkcyan" }}>
                <div className="carousel-center">This carsouel transition is fade</div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "yellowgreen" }}>
                <span className="carousel-center">This carsouel transition is fade</span>
                <div className="carousel-caption">Text</div>
              </div>
            </RBCarousel>
          </div>
        </div>
      </div>
    );
  }
};

export default HomeSliderTest;