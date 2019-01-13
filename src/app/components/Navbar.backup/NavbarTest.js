import React, { Component } from 'react';
import { NavItem } from './NavItem';
import { NavItemsLeft, NavItemsRight } from './../../config/navItems'
import  NavDropdown  from './NavDropdown';
import styles from './styles';

class NavbarTest extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMobileMenuOn: false,
      dropDownOpen: false,
    }   
  }

  showMobileMenu(e) {
    console.log('In Show mobile menu');
    e.preventDefault();
    this.setState(prevState => ({
      isMobileMenuOn: !prevState.isMobileMenuOn,
      dropDownOpen : !prevState.dropDownOpen,
    }));
  }


  render(){

    const navToggler = this.state.isMobileMenuOn ? 'navbar-toggler ml-2 collapsed' : 'navbar-toggler ml-2';
    const navCollapse = this.state.isMobileMenuOn ? 'collapse navbar-collapse nav-content show' : 'collapse navbar-collapse nav-content';

    const navTogglerNew = this.state.isMobileMenuOn ? 'navbar-toggler  collapsed' : 'navbar-toggler';
    const navCollapseNew = this.state.isMobileMenuOn ? 'collapse navbar-collapse show' : 'collapse navbar-collapse';

    const dropDown = this.state.dropDownOpen ? 'nav-item dropdown show' : 'nav-item dropdown';
    const dropDownMenu = this.state.dropDownOpen ? 'dropdown-menu show' : 'dropdown';

    return(
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand pb-2" href="/">Navbar</a>
        <button className={navTogglerNew} type="button" onClick={(e) => {this.showMobileMenu(e)}} data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={navCollapseNew} id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className={dropDown}>
              <a className="nav-link dropdown-toggle" href="http://example.com" onClick={(e) => {this.showMobileMenu(e)}}  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <ul className={dropDownMenu} aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="http://google.com">Google</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Submenu</a></li>
                    <li><a className="dropdown-item" href="/">Submenu0</a></li>
                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/" onClick={(e) => {this.showMobileMenu(e)}} >Submenu 1</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Subsubmenu1</a></li>
                        <li><a className="dropdown-item" href="/">Subsubmenu1</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/">Submenu 2</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Subsubmenu2</a></li>
                        <li><a className="dropdown-item" href="/">Subsubmenu2</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarTest;