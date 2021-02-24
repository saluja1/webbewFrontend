import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';

const Discuss = () => {
  return (
    <section className="section" id="discussProject">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="Ctable">
                        <div className="Vmiddle">
                            <i className="fas fa-comment-dots" style={{fontSize:"100px"}}></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="leftContent">                   
                        <div className="leftContentInner">                  
                            <div className="left-heading">
                                <h2 className="section-title">Let’s discuss about your project</h2>
                            </div>
                            <div className="left-text">
                                <p>We are always glad to talk about your project with you, whether by phone or email. We're sure you'll agree that preparation is an essential first step for any project. Answering the questions below before we begin will help us anticipate your needs and prepare to help you better. If you prefer to discuss these questions together on the phone or via email, we can do that.<br/>
                                None of the questions are required, but we encourage you to share as much as possible about the project so we can provide you with the most accurate project plan and estimate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/> <br/>
        <div className="container">
            <div className="row">
                <div className="col-md-6 order-1 order-md-2">
                    <div className="Ctable">
                        <div className="Vmiddle">
                            <i className="fas fa-hands-helping" style={{fontSize:"100px"}}></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 order-2 order-md-1">
                    <div className="leftContent">                   
                        <div className="leftContentInner">                  
                            <div className="left-heading">
                                <h2 className="section-title">We can help you to grow your business</h2>
                            </div>
                            <div className="left-text">
                                <p>Interested in starting a new project with Webbew Technologies? We’d love to discuss it with you. Please provide us with some background using the form below, and we will follow up with you right away. If you have a general inquiry you can submit that through our general <a href="http://localhost/webbew/contact/"> <span>contact</span></a> page. Let’s begin!</p>
                            </div>
                        </div>
                    </div>        
                </div>

            </div>
        </div>
    </section>
    );
};

export default Discuss;
