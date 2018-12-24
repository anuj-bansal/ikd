import React, { Component } from 'react';
import gb from './../assets/css/globals';
import { PageHeader } from './../components/PageHeader';
import { IKDMap } from './../components/IKDMap';

export class Contact extends Component {
  render() {
    return (
      <div className="main-container">
        <div class="container-fluid p-0 m-0">
          <PageHeader title="Contact Us" subTitle="Let's Get Connected!" />

          <div className="row m-0 p-0 pt-4 jumbotron">
            <div className="col-md-6 pt-4">
              <h2 className="text-center" style={gb.colorBlue}>
                 Locate Us
                </h2>
                <div>
                  <div className="">
                    <h4 className="text-center" style={gb.colorYellow}>
                      85 NW Alder PI Suite B
                    </h4>
                  </div>
                </div>
              <IKDMap />
            </div>
            <div className="col-md-6 pt-4">
              <h2 className="text-center" style={gb.colorBlue}>
                Drop us a Line
              </h2>
              <div>
                <div className="">
                  <h4 className="text-center" style={gb.colorYellow}>
                    Don't hesitate to contact us
                  </h4>
                </div>
                <div className="icon-contacts pb-3">
                  <p className="align-left">
                    Phone: +1 425-657-0609 <br/>
                    Email: youremail@mail.com
                  </p>
                </div>
              </div>
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>  
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>  
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Example textarea</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col p-3">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


