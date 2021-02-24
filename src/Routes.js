import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import Sections from './components/sections/Sections';
import AboutPage from './components/sections/AboutPage';
import ContactPage from './components/sections/ContactPage';
import ServicesPage from './components/sections/ServicesPage';
import SingleServicesPage from './components/sections/SingleServicesPage';

export default () => (
    <Switch>
        <Route exact path="/" component={Sections} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/services" component={ServicesPage} />
		<Route path="/singleservice/:id" component={SingleServicesPage} />
    </Switch>
);
