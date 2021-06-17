import React from 'react';

import './FirstLandingPage.css';
import landingBackground from './landingBackground.jpg';

import { Loader, TextTyperLoader } from '../../components';

export const FirstLandingPage = () => {
	return (
		<div className='background'>
			<img
				src={landingBackground}
				alt='Nature'
				className='img_responsive'></img>
			<div className='loader'>
				<Loader />
			</div>
			<div className='text_type'>
				<TextTyperLoader />
			</div>
		</div>
	);
};
