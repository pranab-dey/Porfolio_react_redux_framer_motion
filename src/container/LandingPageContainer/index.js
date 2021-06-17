import React from 'react';

import './FirstLandingPage.css';

import { Loader, TextTyperLoader } from '../../components';

export const FirstLandingPage = () => {
	return (
		<div className='background'>
			<div className='loader'>
				<Loader />
			</div>
			<div style={{ fontSize: '20px', fontStyle: 'cursive' }}>
				<TextTyperLoader />
			</div>
		</div>
	);
};
