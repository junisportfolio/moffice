import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

const Header = () => (
	<header className="main-header">
		<Link to="/" className="logo">
			<span className="logo-lg"><b>MOCOBEE</b></span>
		</Link>
		<nav className="navbar navbar-static-top">
			<Link to="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
				<span className="sr-only">Toggle Navigation</span>
			</Link>
			<div className="navbar-custom-menu">
				<ul className="nav navbar-nav">

					<li className="dropdown user user-menu">
						<Link to="#" className="dropdown-toggle" data-toggle="dropdown">
							<img src="../images/adminlte/user2-160x160.jpg" className="user-image" alt="User Image"/>
							<span className="hidden-xs">Alexander Pierce</span>
						</Link>
						<ul className="dropdown-menu">
							<li className="user-header">
								<img src="../images/adminlte/user2-160x160.jpg" className="img-circle" alt="User Image"/>
								<p>
									Alexander Pierce
									<small>Web Developer</small>
								</p>
							</li>
							<li className="user-footer">
								<div className="pull-right">
									<Link to="#" className="btn btn-default btn-flat">Sign out</Link>
								</div>
							</li>
						</ul>
					</li>

				</ul>
			</div>
		</nav>
	</header>
)

const ListItemLink = ({ to, text, ...rest }) => (
	<Route path={to} children={({ match }) => (
		<li className={match ? 'active' : ''}>
			<Link to={to} {...rest}/>
		</li>
	)}/>
)

export default Header;