import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from '../pages/dashboard';
import Layout from '../components/layout';
import NotFound from '../pages/notFound';

export const RouteContainer = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Layout><DashBoard /></Layout>} />
			<Route path='*' element={<Layout><NotFound /></Layout>} />
		</Routes>
	</BrowserRouter>
);
