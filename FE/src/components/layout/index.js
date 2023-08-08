import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './style.scss'

export default function Layout({ children }) {
	return (
		<div className="layout">
            <Header />
                <div className="page">{children}</div>
            <Footer />
		</div>
	);
}