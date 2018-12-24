import React, { Component } from 'react';
import gb from './../../assets/css/globals';
import styles from './styles';

const  PageHeader = ({ title, subTitle }) => {
  return (
    <div class="container-fluid" style={styles.titleCont}>
      <div className="row">
        <div className="col m-0" style={gb.blackBack}>
          <div class="text-center m-0">
            <h1 className="text-center" style={styles.heading}>{ title }</h1>
            <p style={styles.subHead}> {subTitle}</p> 
          </div>
        </div>  
      </div>
    </div>
  );
};

export default PageHeader;