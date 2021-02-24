import React, { Fragment } from 'react';

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

const sections = () => {
  return (
    <Fragment>
      <Header />
      <PortfolioSlider />
      <About />
      <Service />
      <Process />
      <Facts />
      <Discuss />
      <TestimonialSlider />
      <Contact />
      <MapMarker />
    </Fragment>
  );
};

export default sections;
