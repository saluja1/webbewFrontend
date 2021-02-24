import React from 'react';
import Header from './UI/Header/Header';
import Footer from './UI/Footer/Footer';

export default (props) => (
	<>
		< Header/>
		<div>
	        { props.children }
		</div>
		< Footer/>

    </>    
);