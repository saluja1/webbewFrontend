import React, { useState, useEffect } from 'react';
import jQuery from "jquery";
import Section from '../../HOC/Section';
import bgImage from '../../assets/img/home_bg.jpg';
import Link from '../UI/Link/Link';
import {Particles} from 'react-particles-js';

const Header = () => {
  useEffect(() => {

    var textType = function(el, toRotate) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = 3000;
        this.txt = '';
        this.isDeleting = false;
    };

    textType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullText = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullText.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullText.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = this.txt;

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {delta /= 2;}

        if (!this.isDeleting && this.txt === fullText) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    }

    function typewrite() {

        if(jQuery('.typewrite').length > 0) {

            var elements = jQuery('.typewrite');

            for (var i = 0; i < elements.length; i++) {

                var toRotate = elements[i].getAttribute('data-type');
                new textType(elements[i], JSON.parse(toRotate));
            }
        }
    }
    typewrite();



  });
  return (
        <Section id='bannerHeader'>
            <Particles
            style={{ position: "absolute" }}
            height="95%"
            width="95%"
            params={{
              particles: {
                color: {
                  value: "#ffffff"
                },
                line_linked: {
                  color: {
                    value: "#ffffff"
                  }
                },
                number: {
                  value: 50
                },
                size: {
                  value: 3
                }
              }
            }}
            />
            <div style={{"marginTop": "119px"}}>
                <section className="section-banner" id="particle">
                    <div className="banner-inner">
                      <h1 className="banner-heading">We love to <strong className="typewrite" data-period="4000" data-type="[&quot;Explore.&quot;, &quot;Capture.&quot;, &quot;Develop.&quot;]">Expl</strong>
                            </h1>
                      <p className="banner-description">Young minds reshaping the future of Ecommerce Technology.</p>
                    </div>
                    <canvas className="particles-js-canvas-el" width="1349" height="450" style={{"width": "100%", "height": "100%"}}></canvas>
                </section>
            </div>
        </Section>
  );
};

export default Header;
