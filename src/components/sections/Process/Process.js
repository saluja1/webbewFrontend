import React from 'react';

import Section from '../../../HOC/Section';


const Process = () => {
  return (
      <section className="workProcess" id="work-process">
          <div className="workProcess-content">
              <div className="container">
                  <div className="row">
                      <div className="offset-lg-3 col-lg-6">
                          <div className="info">
                              <h1>Our Work Process</h1>
                          </div>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                          <span className="workProcess-box">
                  <i className="fas fa-handshake" style={{fontSize: "48px"}}></i>
                              <strong>Meet</strong>
                          </span>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                          <span className="workProcess-box">
                  <i className="fas fa-tasks" style={{fontSize: "48px"}}></i>
                              <strong>Plan</strong>
                          </span>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                          <span className="workProcess-box">
                  <i className="fas fa-file-code" style={{fontSize: "48px"}}></i>
                              <strong>Design &amp; Development</strong>
                          </span>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                          <span className="workProcess-box">
                  <i className="fas fa-check" style={{fontSize: "48px"}}></i>
                              <strong>Testing</strong>
                          </span>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                          <span className="workProcess-box">
                  <i className="fas fa-rocket" style={{fontSize: "48px"}}></i>
                              <strong>Launch</strong>
                          </span>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                          <span className="workProcess-box">
                  <i className="fas fa-ad" style={{fontSize: "48px"}}></i>
                              <strong>Digital Mraketing</strong>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Process;
