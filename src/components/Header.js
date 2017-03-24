import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';
import jasync from '../jasync';

class Header extends Component {
	constructor() {
		super();

		let user = {
			id: localStorage.getItem("user_id"),
			name: "",
			level: 0
		};

		jasync.sync.get({
			url: "/private/v1/users/" + user.id,
			success: data => {
				if(data.result === "ok") {
					user.name = data.users[0].user_name;
					user.level = data.users[0].user_level;
				}
			}
		});

		this.state = {
			user: user
		};
	}

	logout() {
		jasync.get({
			url: "/private/v1/auth/logout",
			success: data => {
				alert("로그아웃 되었습니다.");
				window.location.reload();
			},
			error: err => {
				alert("로그아웃 중 문제가 발생했습니다.");
				console.log(err);
			}
		});
	}

	render() {
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
									<img src="../images/adminlte/user2-160x160.jpg" className="user-image" alt="User Portrait"/>
									<span className="hidden-xs">{this.state.user.name}</span>
								</Link>
								<ul className="dropdown-menu">
									<li className="user-header">
										<img src="../images/adminlte/user2-160x160.jpg" className="img-circle" alt="User Portrait"/>
										<p>
											{this.state.user.name}
											<small>{this.state.user.level}</small>
										</p>
									</li>
									<li className="user-footer">
										<div className="pull-right" onClick={this.logout.bind(this)}>
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