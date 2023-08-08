import React from 'react';
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from '../../assets/images/phone.svg';
import { ReactComponent as Mail } from '../../assets/images/mail-2.svg';

import './footer.scss';

export default function Footer() {
	return (
		<div className="footer">
			<div className="container">
            	<img src={Logo} alt="logo" className="logo" />
			</div>
			<div className="container">
				<ul className="footer-links">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/">About</Link></li>
					<li><Link to="/">Contact</Link></li>
					<li><Link to="/">FAQ</Link></li>
					<li><Link to="/">Privacy Policy</Link></li>
					<li><Link to="/">Terms & Conditions</Link></li>
				</ul>
				<ul className="contact-links">
					<li>
						<Link to="mailto:customercare@likehire.com"><span><Phone /></span> customercare@likehire.com</Link>
					</li>
					<li>
						<Link to="tel:2569889693"><span><Mail /></span>(+1) - 25698 89693</Link>
					</li>
				</ul>
			</div>
			<div className="container">
				<p className="copyright">© 2020 Like Hire. All rights reserved</p>
				<div className="social-media-links">

				</div>
			</div>
        </div>
	);
}