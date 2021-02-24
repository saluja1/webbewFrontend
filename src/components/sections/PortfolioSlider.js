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

const PortfolioSlider = () => {
  const settings = {
    className: "gallery",
    dots: true,
    arrows: true,
    infinite: true,
    adaptiveHeight: true
  };

  return (
    <section className="portfolio-slider">
        <div className="portfolio-items">
            <Slider {...settings}>
                <img src={p1Image} />
                <img src={p2Image} />
            </Slider>
        </div>
    </section>
  );
};


export default PortfolioSlider;
