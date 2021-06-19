import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';

// import { LandingPage, FullPage } from './pages';

import { FullPage } from './pages';

ReactDOM.render(
	<React.StrictMode>
		{/* <LandingPage /> */}
		<FullPage />
	</React.StrictMode>,
	document.getElementById('root')
);
