import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Navigation from './Navigation';

const Sidebar = () => (
	<aside className="main-sidebar">
		<section className="sidebar">
			<Navigation/>
		</section>
	</aside>
)

export default Sidebar;












