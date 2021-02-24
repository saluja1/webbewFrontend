import React, { Fragment } from 'react';

import Header from './Header';
import PortfolioSlider from './PortfolioSlider';
import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import Facts from './Facts/Facts';
import Process from './Process/Process';
import Discuss from './Discuss/Discuss';
import Contact from './Contact/Contact';
import MapMarker from './MapMarker/MapMarker';

const AboutPage = () => {
  return (
    <Fragment>
      <Header />
      <PortfolioSlider />
      <About />
			<section className="aboutWrapper">
			    <div className="container">
			        <div className="row">
			            <div className="col-md-6">
							<div className="Ctable">
								<div className="Vmiddle">
					                <img src="http://webbew.webbew.in/wp-content/themes/webbew/assets/images/whoweare.png" className="img-fluid" alt="Webbew" />
								</div>
							</div>
			            </div>
			            <div className="col-md-6 pt-4">
			                <p>
								With a motive to empower this technology-driven world WEBBEW is all set to commence its digital transformation journey. WEBBEW is here to accelerate your innovations and therefore contributing to global development.
			                </p>
			            </div>
			        </div>

			        <div className="row">
			            <div className="col-md-6 order-1 order-md-2">
							<div className="Ctable">
								<div className="Vmiddle">
					                <img src="http://webbew.webbew.in/wp-content/themes/webbew/assets/images/whatwedo.png" className="img-fluid" alt="Webbew" />
								</div>
							</div>
			            </div>
			            <div className="col-md-6 pt-5 order-2 order-md-1">
				            <p>
				            	WEBBEW is here to open the doors of endless opportunities for everyone. For this, we ensure our customers the highest level of satisfaction when it comes to reaching a business objective together. With a combined experience of more than 30 years in the field of technology, our team is committed to empowering your business by making it a success.
				            </p>
			            </div>
			        </div>
			        <div className="row">
			            <div className="col-md-6">
							<div className="Ctable">
								<div className="Vmiddle">
					                <img src="http://webbew.webbew.in/wp-content/themes/webbew/assets/images/ourmission.png" className="img-fluid" alt="Webbew" />
								</div>
							</div>
			            </div>
			            <div className="col-md-6 pt-4">
			                <p>
								Well, our team consists of passionate design and expert development professionals. We aim to shape the landscape for e-commerce businesses in India and the world.
			                </p>
			            </div>
			        </div>
			    </div>
			</section>
      <Facts />
      <Contact />
    </Fragment>

  );
};

export default AboutPage;
