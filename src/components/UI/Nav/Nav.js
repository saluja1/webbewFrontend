import React, { useState, useEffect } from 'react';
import jQuery from "jquery";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Sections from '../../sections/Sections';
import AboutPage from '../../sections/AboutPage';
import ContactPage from '../../sections/ContactPage';


const Nav = () => {
  useEffect(() => {

    var textType = function(el, toRotate) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = 3000;
        this.txt = '';
        this.tick();
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
    };


    var typewrite = function() {

        if(jQuery('.typewrite').length > 0) {

            var elements = jQuery('.typewrite');

            for (var i = 0; i < elements.length; i++) {

                var toRotate = elements[i].getAttribute('data-type');
                new textType(elements[i], JSON.parse(toRotate));
            }
        }
    }

    typewrite();
  
    var header = function() {
        jQuery(window).scroll(function(event){
            var scrollTop = jQuery(window).scrollTop();
            if (scrollTop > 0) {
                jQuery('.brand-header').css({top: 0});
            } else {
                jQuery('.brand-header').css({top: 56});
            }
            var winWidth = jQuery( window ).width();
            if (winWidth < 767 && scrollTop > 0) {
                jQuery('.toggle-menu').show();
                jQuery('.nav-list').show();
                jQuery(".line").css({backgroundColor: "#000000"})           
            } else {
                jQuery(".line").css({backgroundColor: "#ffffff"})           
            }

        });
    }

    header();

  });
  return (
        <header className="brand-header">
          <div className="cs-container">
            <div className="row align-items-center">
              <div className="col-6 col-md-4">
                <a className="brand-logo" href="http://webbew.webbew.in"> <img src="http://webbew.webbew.in/wp-content/uploads/2020/11/cropped-1.png " alt="Webbew" /> </a>
              </div>

              <div className="col-md-8">
                <nav className="brand-navigation" style={{"display": "block"}}>
                  <ul id="brand-menus" className="brand-menus">
                    <li className="menu-item  current-menu-item"> 
                        <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/services">Services</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
  );
};

export default Nav;
