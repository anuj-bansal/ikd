import React, { Component } from 'react';
import { NavItem } from './NavItem';
import { NavItemsLeft, NavItemsRight } from './../../config/navItems'
import  NavDropdown  from './NavDropdown';
import styles from './styles';

class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      isMobileMenuOn: false
    }   
  }

  showMobileMenu(e) {
    console.log('In Show mobile menu');
    e.preventDefault();
    this.setState(prevState => ({
      isMobileMenuOn: !prevState.isMobileMenuOn
    }));
  }

  render(){

    const navToggler = this.state.isMobileMenuOn ? 'navbar-toggler ml-2 collapsed' : 'navbar-toggler ml-2';
    const navCollapse = this.state.isMobileMenuOn ? 'collapse navbar-collapse nav-content show' : 'collapse navbar-collapse nav-content';

    return(
      <nav className=" navbar navbar-expand-lg navbar-light sticky-top bg-light main-nav" style={styles.navBack} >
        <div className="container" >
          <div className={navCollapse+" order-2 justify-content-end"}>
            <ul className="nav navbar-nav ">
              {
                NavItemsLeft.map( (item, index) =>{
                  if(item.children === undefined)
                    return <NavItem  key={index} path={item.link} name={item.name} />
                  else{
                    return(
                      <NavDropdown key={index} name={item.name}>
                        { item.children.map( (childItem, childIndex) => {
                            return <NavItem key={index+childIndex} path={childItem.link} name={childItem.name} child> </NavItem>    
                          })
                        }
                      </NavDropdown>
                    );
                  }
                })
              }
            </ul>
          </div>

          <ul className="nav navbar-nav text-nowrap flex-row mx-auto order-1 order-lg-2">
            <li className="nav-item">
              <a className="navbar-brand navbar-brand-centered ikd-logo" href="/" style={styles.logo}> <img className="img-thumbnail img-fluid d-inline-block" src={require('./../../assets/images/issaquahkidsdentistry-logo.png')} alt="IKD Logo"/> </a>
            </li>

            <div style={styles.resIcon}>
              <button className={navToggler} type="button" onClick={(e) => {this.showMobileMenu(e)}} data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={this.state.isMobileMenuOn} aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        
          </ul>

          <div className={navCollapse+ " order-3 order-md-3 justify-content-start" } >
            <ul className="nav navbar-nav">
              {
                NavItemsRight.map( (item, index) =>{
                  if(item.children === undefined)
                    return <NavItem  key={index} path={item.link} name={item.name} />
                  else{
                    return(
                      <NavDropdown name={item.name}>
                        { item.children.map( (childItem, childIndex) => {
                            return <NavItem key={index+childIndex} path={childItem.link} name={childItem.name} child> </NavItem>    
                          })
                        }
                      </NavDropdown>
                    );
                  }
                })
              }
            </ul>
          </div>
        </div>
      </nav>
      );
  }
}

export default Navbar;