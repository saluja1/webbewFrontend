import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';


import Section from '../../../HOC/Section';

const Service = () => {
  const [getData, setData] = useState({});

  useEffect(() => {
    axios.get('http://webbew.webbew.in/wp-json/wp/v2/service')
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },[]);

  return (
    <section className="servicesSection">
      <div className="services">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h2 className="section-title">Our services</h2>
              <p className="section-subtitle">WEBBEW offers IT services to enhance not just project but we rather believe in creating a digital experience.</p>
            </div>
          </div>

          <div className="row">
          {

            Object.keys(getData).map(function(key, index) {
              let serviceId = getData[index].id;
              let serviceIcon = getData[index].icon_class;
              let serviceTitle = getData[index].title.rendered;
              let serviceContent = getData[index].content.rendered;
              return(
                <div key={serviceId} className="col-md-6 col-lg-4 mb-3">
                  <div className="box p-5">
                    {parse(serviceIcon)}
                    <h4>
                      {parse(serviceTitle)}
                    </h4>
                    {parse(serviceContent)}
                    <a className="readmore" href={`/singleservice/${serviceId}`}><span>Explore More</span></a>
                  </div>  
                </div>
              )
            })

          }
          </div>
        </div>
      </div>    
    </section>  
  );
};

export default Service;
