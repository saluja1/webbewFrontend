import React, { Fragment, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

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
import axios from 'axios';
import parse from 'html-react-parser';

const SingleServicesPage = () => {
	const [isMounted, isMount] = useState(false);
	const [getData, setData] = useState({});
	const [getIcon, setIcon] = useState("");
	const [getServiceIntro, setServiceIntro] = useState("");
	const [getServiceWeOffer, setServiceWeOffer] = useState("");
	let { id } = useParams();

useEffect(() => {
	if (!isMounted) {
		axios.get('https://webbew.webbew.in/wp-json/wp/v2/service')
		  .then(function (response) {
			Object.keys(response.data).map(function(key, index) {
				if (response.data[index].id == id) {
		    		setData(response.data[index]);
		    		setIcon(response.data[index].icon_class);
		    		setServiceIntro(response.data[index].service_intro);
		    		setServiceWeOffer(response.data[index].services_we_offer);
		            isMount(true)
				}
			});

		  })
		  .catch(function (error) {
		    // handle error
		    console.log(error);
		  })
		  .then(function () {
		    // always executed
		  });
	}  
},[]);
  return (
    <Fragment>
      <Header />
      <PortfolioSlider />

      <div>
		<section className="agency-grow">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="Ctable">
							<div className="Vmiddle">	
								
							{parse(getIcon)}
							
							</div>
						</div>
					</div>
					<div className="col-md-8">
						<div className="heading-content">
							{parse(getServiceIntro)}
						</div>
					</div>
				</div>
			</div>
		</section>


		<section className="our-service-section">
			<div className="container">
				{parse(getServiceWeOffer)}
			</div>
		</section>



		<section className="expertiseSection">
			<div className="container">
				<div className="heading-content">
					<h2 className="section-title">Our Expertise <i className="fa fa-cogs" style={{"fontSize": "48px"}}></i></h2>
				</div>
				<div className="block-lists">
					<div className="single-block">
						<div className="row">
							<div className="col-md-2">
								<div className="Ctable">
									<div className="Vmiddle">
										<i className="fa fa-fighter-jet" style={{"fontSize":"100px"}}></i>
									</div>
								</div>
							</div>
							<div className="col-md-1">
							</div>
							<div className="col-md-9">
								<div className="block-content">
									<h5>Providing Speed &amp; Performance</h5>
									<p>All the websites that we develop are super-fast and highly optimized. We ensure all the best practices are followed throughout the custom development process, which improves overall user engagement and conversion.</p>
								</div>
							</div>

						</div>
					</div>

					<div className="single-block">
						<div className="row">
							<div className="col-md-2">
								<div className="Ctable">
									<div className="Vmiddle">
										<i className="fa fa-rocket" style={{"fontSize":"100px"}}></i>
									</div>
								</div>
							</div>
							<div className="col-md-1">
							</div>
							<div className="col-md-9">
								<div className="block-content">
									<h5>SEO-Smart Web Solutions</h5>
									<p>Optimized for search engines, our basic SEO implementation includes heading tags, meta tags, image optimization, Alt text, etc., followed by the techniques that allow smoother implementation. This kickstarts marketing without any additional efforts.</p>
								</div>
							</div>


						</div>
					</div>

					<div className="single-block">
						<div className="row">
							<div className="col-md-2">
								<div className="Ctable">
									<div className="Vmiddle">
										<i className="fa fa-paper-plane" style={{"fontSize":"100px"}}></i>
									</div>
								</div>
							</div>
							<div className="col-md-1">
							</div>
							<div className="col-md-9">
								<div className="block-content">
									<h5>Simple, Clean &amp; Functional Websites</h5>
									<p>We use intelligent frameworks. Our coding practices are well commented with universally accepted naming conventions which translate to easy use worldwide. That’s the first thing you’d expect from a trustworthy Website Development Company.</p>
								</div>
							</div>


						</div>
					</div>

					<div className="single-block">
						<div className="row">
							<div className="col-md-2">
								<div className="Ctable">
									<div className="Vmiddle">
										<i className="fa fa-bicycle" style={{"fontSize":"100px"}}></i>
									</div>
								</div>
							</div>
							<div className="col-md-1">
							</div>
							<div className="col-md-9">
								<div className="block-content">
									<h5>Low-Maintenance</h5>
									<p>We follow industry best practices for our website development services, removing any hardcoded gaps or unethical customisations. This ensures that our sites are easy to run and maintain.</p>
								</div>
							</div>

						</div>
					</div>

					<div className="single-block">
						<div className="row">
							<div className="col-md-2 .col-md-offset-1">
								<div className="Ctable">
									<div className="Vmiddle">
										<i className="fas fa-truck-pickup" style={{"fontSize": "100px"}}></i>
									</div>
								</div>
							</div>
							<div className="col-md-1">
							</div>
							<div className="col-md-9">
								<div className="block-content">
									<h5>Seamlessly Upgradable &amp; Secure</h5>
									<p>Our websites are easily upgradable without any disruption in their previous functionality. We use the highest security techniques to ensure that the site is safe from any bot attacks. We follow correct ﬁle permissions, spam protection, form validations, conﬁguration settings, etc., to ensure that the website remains safe and secured.</p>
								</div>
							</div>

						</div>
					</div>

				</div>
				<div className="callToAction text-center">
					<a className="btn btn-cta callToActionBtn" href="/contact">Lets talk about your idea</a>
				</div>
			</div>

		</section>


      </div>


      <TestimonialSlider />
      <Contact />
    </Fragment>

  );
};

export default SingleServicesPage;
