import React from 'react';

import './FirstLandingPage.css';

import Loader from '../../components';

export const FirstLandingPage = () => {
	return (
		<div className='background'>
			<div className='loader'>
				<Loader />
			</div>
		</div>
	);
};
