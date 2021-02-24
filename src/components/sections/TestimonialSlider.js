import React, { useState, useEffect } from 'react';
import jQuery from "jquery";
import Section from '../../HOC/Section';
import bgImage from '../../assets/img/home_bg.jpg';
import p1Image from '../../assets/images/p1.jpg';
import p2Image from '../../assets/images/p2.jpg';
import {Particles} from 'react-particles-js';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";

const TestimonialSlider = () => {
  const settings = {
    className: "gallery",
    dots: true,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 1, 
    slidesToScroll: 1 
  };

  return (
<section className="testimonials-wrapper">

    <div className="cs-container testimonials-inner">

      <div className="row text-center">
        <div className="col-12">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">See what our clients say about us.</p>
        </div>
      </div>  
      <div className="row">
        <div className="col-12">
            <Slider {...settings}>
                  <div className="testimonials-item" style={{"width": "100%", "display": "inline-block"}}>
                      <div className="user-image" style={{"backgroundImage": "url('http://webbew.webbew.in/wp-content/themes/webbew/assets/images/sharad-saxena.jpg')"}}>
                          <span className="user-quote d-flex justify-content-center align-items-center">
                              <i className="fas fa-quote-left"></i>
                          </span>
                      </div>

                      <div className="user-text">
                          <p className="user-content" style={{"minHeight": "192px"}}>We would like to express our satisfaction on the cooperation regarding the development of our website. We are satisfied with the solution given to us and with the communication flow through the project. We look forward to working with them in future projects.</p>

                          <p className="user-name">Sharad Saxena</p>
                          <p className="user-position">Founder, Visutra</p>
                      </div>
                  </div>
                  <div className="testimonials-item" style={{"width": "100%", "display": "inline-block"}}>
                      <div className="user-image" style={{"backgroundImage": "url('http://webbew.webbew.in/wp-content/themes/webbew/assets/images/sumit-kumar.jpg')"}}>
                          <span className="user-quote d-flex justify-content-center align-items-center">
                              <i className="fas fa-quote-left"></i>
                          </span>
                      </div>

                      <div className="user-text">
                          <p className="user-content" style={{"minHeight": "192px"}}>We would like to express our satisfaction on the cooperation regarding the development of our website. We are satisfied with the solution given to us and with the communication flow through the project. We look forward to working with them in future projects.</p>
                          <p className="user-name">Sumit Kumar</p>
                          <p className="user-position">Project Manager</p>
                      </div>
                  </div>
            </Slider>
        </div>
      </div>  
    </div>  
    </section>
  );
};


export default TestimonialSlider;
