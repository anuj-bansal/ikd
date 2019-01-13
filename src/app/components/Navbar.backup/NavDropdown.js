import React from 'react';

export default class NavDropdown extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isToggleOn: false
    }

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    console.log('Node is: ', node);
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    console.log(this.state.isToggleOn);
    let cn= event.target.className;

    console.log('CN is:', cn);

    if (this.wrapperRef && cn && !cn.includes('dropdown-toggle') && !this.wrapperRef.contains(event.target)) {
      console.log('Clicked some on dropdown')
      console.log('Target is: ',event.target);
      console.log('Target Unique thing is: ', event.target.className);
      // let cn 
      // alert('You clicked outside of me!');
      if(this.state.isToggleOn){
        event.preventDefault();
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
        
      // console.log('Current state is', this.state.isToggleOn);
      // this.setState({isToggleOn: false}, () =>{
      //   console.log('State is off', this.state.isToggleOn);
      // } );
    }
  }

  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '');
    return (
      <li ref={this.setWrapperRef} className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"
          onClick={(e) => {this.showDropdown(e)}} >
          
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    )
  }
}

