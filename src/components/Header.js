import React, {Component} from 'react';
import {
	Link
} from 'react-router-dom';
import jasync from '../jasync';

class Header extends Component {


	render() {

		let user_level = '';
		switch (this.props.auth.user_level) {
			case 1:
				user_level = '슈퍼관리자';
				break;
			case 2:
				user_level = '관리자';
				break;
			case 3:
				user_level = '부관리자';
				break;
			case 4:
				user_level = '아르바이트';
				break;
			case 9:
				user_level = '회원';
				break;
			default:
				return status;
		}


		return (
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
									<img src={`http://image.yjcho-mocobee.com/data/image/avatar/${this.props.auth.user_icon}.png`}
											 className="user-image" alt={`${this.props.auth.user_name}의 아이콘`}/>
									<span className="hidden-xs">{this.props.auth.user_name}</span>
								</Link>
								<ul className="dropdown-menu">
									<li className="user-header">
										<img src={`http://image.yjcho-mocobee.com/data/image/avatar/${this.props.auth.user_icon}.png`}
												 className="img" alt={`${this.props.auth.user_name}의 아이콘`}/>
										<p>
											{this.props.auth.user_name}
											<small>{ user_level }</small>
										</p>
									</li>
									<li className="user-footer">
										<div className="pull-right" onClick={this.props.handleLogout}>
											<Link to="#" className="btn btn-default btn-flat">Sign out</Link>
										</div>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;