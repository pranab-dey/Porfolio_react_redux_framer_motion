import React from 'react';
// import "./App.css";
import { Navbar } from '../../components';
// import Section from "./Components/Section";

import {
	IntroContainer,
	PortfolioContainer,
	AboutContainer,
	ContactContainer,
	FooterContainer,
} from '../../container';

export default function FullPage() {
	return (
		<>
			<div className=''>
				<Navbar />
				<IntroContainer id='IntroContainer' />
				<AboutContainer id='AboutContainer' />
				<PortfolioContainer id='PortfolioContainer' />
				<ContactContainer id='ContactContainer' />
				<FooterContainer />
			</div>
		</>
	);
}
