import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './navbar.css';
import logo from './logo.png';

export default function Navbar() {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<nav className='nav' id='navbar'>
			<div className='nav-content'>
				<img
					src={logo}
					className='nav-logo'
					alt='Logo'
					onClick={scrollToTop}
				/>
				<ul className='nav-items'>
					<li className='nav-item'>
						<Link
							activeClass='active'
							to='IntroContainer'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							Home
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							activeClass='active'
							to='AboutContainer'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							About me
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							activeClass='active'
							to='PortfolioContainer'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							Portfolio
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							activeClass='active'
							to='ContactContainer'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
