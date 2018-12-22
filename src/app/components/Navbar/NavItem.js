import React from 'react';

export const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search;
  const liClassName = (props.path === pageURI ) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"

  if(!props.child){
    return(
      <li className={liClassName}>
        <a href={props.path} className={aClassName}>
          {props.name}
          {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
        </a>
      </li>
    );
  }

  else{
    const childItmClassName= 'dropdown-item' +  ((props.path === pageURI) ? ' active'  : '');

    return(
      <a className={childItmClassName} href={props.path}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    );
  }
}