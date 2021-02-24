import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

import Header from './Header';
import PortfolioSlider from './PortfolioSlider';
import TestimonialSlider from './TestimonialSlider';
import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import Facts from './Facts/Facts';
import Process from './Process/Process';
import Discuss from './Discuss/Discuss';
import Contact from './Contact/Contact';
import MapMarker from './MapMarker/MapMarker';

const ServicesPage = () => {
  return (
    <Fragment>
      <Header />
      <PortfolioSlider />
      <Service />
      <TestimonialSlider />
      <Contact />
    </Fragment>

  );
};

export default ServicesPage;
