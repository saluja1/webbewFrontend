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

const ContactPage = () => {
  return (
    <Fragment>
      <Header />
      <PortfolioSlider />
      <Contact />
		<section className="contactUsSocial" id="contactUsSocial">
			<div className="banner-content text-center">
				<h2>Choose your medium to contact</h2>
			</div>
			<div className="container">
				<div className="row">

					<div className="col-lg-6 col-md-6 col-sm-12">
						<h5>Lets have a cup of coffee</h5>					
					</div>

					<div className="col-lg-6 col-md-6 col-sm-12">
						<ul className="social-icons">					
							<li>
								<address>
									<h5>6, RD City Center, Hisar, Haryana</h5>
									<span>Pincode: 125001</span>
								</address>					
		                    </li>
						</ul>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12">
						<h5>Contact us on social media</h5>					
					</div>

					<div className="col-lg-6 col-md-6 col-sm-12">
						<ul className="social-icons">
							<li><a href="https://www.facebook.com/webbewtech"><i className="fa fa-facebook"></i></a></li>
							<li><a href="https://twitter.com/webbewtech"><i className="fa fa-twitter"></i></a></li>
							<li><a href="https://www.instagram.com/webbewtech/"><i className="fa fa-linkedin"></i></a></li>
						</ul>					
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12">
						<h5>Lets have a call</h5>					
					</div>

					<div className="col-lg-6 col-md-6 col-sm-12">
						<ul className="social-icons">
							<li><a href="tel:9996847294"><i className="fa fa-phone"></i> 9996847294</a></li>
							<li><a href="tel:8930087838"><i className="fa fa-phone"></i> 8930087838</a></li>
						</ul>					
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12">
						<h5>Write a mail to us</h5>					
					</div>

					<div className="col-lg-6 col-md-6 col-sm-12">
						<ul className="social-icons">
							<li><a href="mailto:info@webbew.in"><i className="fa fa-envelope"></i> info@webbew.in</a></li>
							<li><a href="mailto:support@webbew.in"><i className="fa fa-envelope"></i> support@webbew.in</a></li>
						</ul>					
					</div>
				</div>

			</div>			
		</section>
      <MapMarker />
    </Fragment>

  );
};

export default ContactPage;
