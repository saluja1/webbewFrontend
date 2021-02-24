import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';

const about = () => {
  return (
<section className="section" id="about2">
        <div className="container">
            <div className="row">
                <div className="left-text col-lg-5 col-md-12 col-sm-12">
                    <div className="left-heading">
                        <h5>About Webbew</h5>
                    </div>
                    <p>With a motive to empower this technology-driven world WEBBEW is all set to commence its digital transformation journey.</p>
                    <ul>
                        <li>
                            <div className="text">
                                <h6>Who we are</h6>
                                <p>Our team consists of passionate design and expert development professionals with a combined experience of more than 30 years.</p>
                            </div>
                        </li>
                        <li>
                            <div className="text">
                                <h6>What we do</h6>
                                <p>WEBBEW is here to accelerate your innovations and therefore contributing to global development.</p>
                            </div>
                        </li>
                        <li>
                            <div className="text">
                                <h6>Our Mission</h6>
                                <p>WEBBEW strives to open the doors of endless opportunities for everyone.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <img alt="Webbew" src="http://localhost/webbew/wp-content/themes/webbew/assets/images/about.png" className="rounded img-fluid d-block mx-auto" />
                </div>
            </div>
        </div>
    </section>  );
};

export default about;
