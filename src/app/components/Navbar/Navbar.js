import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import { Link } from 'react-router-dom';

  import { NavItemsLeft, NavItemsRight } from './../../config/navItems'

  import styles from './styles';

class NavbarIKD extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    const pageURI = window.location.pathname+window.location.search;

    console.log('Navbar Left is: ', NavItemsLeft);
    return(
        <Navbar className="main-nav sticky-top" color="light" light expand="lg" style={styles.navBack}>
          <div className="container">
            <Collapse className="nav-content order-2 justify-content-end" isOpen={this.state.isOpen} navbar>
              <Nav  navbar>
                {
                  NavItemsLeft.map( (item, index) =>{
                    if(item.children === undefined){
                      console.log('navitem is undefined');
                      return(
                        <NavItem  key={index} >
                          <NavLink tag={Link} to={item.link}  activeClassName="active">{item.name} </NavLink>
                        </NavItem>
                      )
                    }
                    else{
                      return(
                        <UncontrolledDropdown key={index} name={item.name} nav inNavbar>
                          
                            <DropdownToggle nav caret>
                              {item.name}
                            </DropdownToggle>
                         
                          <DropdownMenu right>
                            { item.children.map( (childItem, childIndex) => {
                                if(childItem.children === undefined )
                                  return (
                                    <DropdownItem>
                                      <NavItem  key={index+childIndex} >
                                        <NavLink tag={Link} className="nav-link" to={childItem.link} activeClassName="active">
                                          {childItem.name}
                                        </NavLink>
                                      </NavItem>
                                    </DropdownItem>
                                  )
                                else {
                                  return(
                                    <UncontrolledDropdown direction="right" key={index+childIndex} name={childItem.name} nav inNavbar>
                                      <DropdownItem>
                                        <DropdownToggle  nav caret>
                                          {childItem.name}
                                        </DropdownToggle>
                                      </DropdownItem>
                                      
                                      <DropdownMenu right>
                                        { 
                                          childItem.children.map( (grandChild, grandChildIndex ) => { 
                                            return(
                                              <DropdownItem>
                                                <NavItem  key={childIndex+grandChildIndex} >
                                                  <NavLink tag={Link} className="nav-link" to={grandChild.link} activeClassName="active">
                                                    {grandChild.name}
                                                  </NavLink>
                                                </NavItem>
                                              </DropdownItem>     
                                            );
                                          })
                                        }
                                      </DropdownMenu>

                                    </UncontrolledDropdown>
                                  )
                                  
                                 }  
                              })
                            }
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      );
                    }
                  })
                }
              </Nav>
            </Collapse>

            <ul class="nav navbar-nav text-nowrap flex-row mx-auto order-1 order-lg-2">
              <li className="nav-item">
                <a className="navbar-brand navbar-brand-centered ikd-logo" href="/" style={styles.logo}> <img className="img-thumbnail img-fluid d-inline-block" src={require('./../../assets/images/issaquahkidsdentistry-logo.png')} alt="IKD Logo"/> </a>
              </li>
              <div style={styles.resIcon}>
                <NavbarToggler onClick={this.toggle} />
              </div>
            </ul>


            <Collapse className="nav-content order-3 order-md-3 justify-content-start" isOpen={this.state.isOpen} navbar>
            <Nav  navbar>
                {
                  NavItemsRight.map( (item, index) =>{
                    if(item.children === undefined){
                      console.log('navitem is undefined');
                      return(
                        <NavItem  key={index} >
                          <NavLink tag={Link} to={item.link}  activeClassName="active">{item.name} </NavLink>
                        </NavItem>
                      )
                    }
                    else{
                      return(
                        <UncontrolledDropdown key={index} name={item.name} nav inNavbar>
                          
                            <DropdownToggle nav caret>
                              {item.name}
                            </DropdownToggle>
                         
                          <DropdownMenu right>
                            { item.children.map( (childItem, childIndex) => {
                                if(childItem.children === undefined )
                                  return (
                                    <DropdownItem>
                                      <NavItem  key={index+childIndex} >
                                        <NavLink tag={Link} className="nav-link" to={childItem.link} activeClassName="active">
                                          {childItem.name}
                                        </NavLink>
                                      </NavItem>
                                    </DropdownItem>
                                  )
                                else {
                                  return(
                                    <UncontrolledDropdown direction="right" key={index+childIndex} name={childItem.name} nav inNavbar>
                                      <DropdownItem>
                                        <DropdownToggle  nav caret>
                                          {childItem.name}
                                        </DropdownToggle>
                                      </DropdownItem>
                                      
                                      <DropdownMenu right>
                                        { 
                                          childItem.children.map( (grandChild, grandChildIndex ) => { 
                                            return(
                                              <DropdownItem>
                                                <NavItem  key={childIndex+grandChildIndex} >
                                                  <NavLink tag={Link} className="nav-link" to={grandChild.link} activeClassName="active">
                                                    {grandChild.name}
                                                  </NavLink>
                                                </NavItem>
                                              </DropdownItem>     
                                            );
                                          })
                                        }
                                      </DropdownMenu>

                                    </UncontrolledDropdown>
                                  )
                                  
                                 }  
                              })
                            }
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      );
                    }
                  })
                }
              </Nav>
            </Collapse>
          </div>
        </Navbar>
    );
  }
}

export default NavbarIKD;