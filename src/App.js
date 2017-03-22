import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import { Header, Sidebar } from './components';
import Dispatcher from './Dispatcher';
import jQuery from 'jquery';
import {
	Home,
	Member,
	Login,
	NoMatch
} from './containers';
import maxios from './maxios';

class App extends Component {
	constructor() {
		super();

		let auth = {
			validate: false,
			user: null
		};

		(function ($) {
			$.ajax({
				url: process.env.api + "/private/v1/auth",
				method: "get",
				async: false,
				xhrFields: {
					withCredentials: true
				},
				success: function (obj) {
					if (obj.result === "ok") {
						auth.validate = true;
						auth.user = obj.user;
					}
				},
				error: function (err) {
					auth.validate = false;
					auth.user = null;
				}
			});


			$.ajax({
				url: process.env.api + "/private/v1/users/" + auth.user.id,
				method: "get",
				async: false,
				xhrFields: {
					withCredentials: true
				},
				success: function (obj) {
					if (obj.result === "ok") {
						auth.validate = true;
						auth.userinfo = obj.users[0];
					}
				},
				error: function (err) {
					auth.validate = false;
					auth.user = null;
				}
			});
		})(jQuery);

		this.state = {
			auth: auth
		};
	}

	render() {
		if (this.state.auth.validate) {
			return (
				<div className="wrapper">
					<Header
						userinfo={this.state.auth.userinfo}
					/>
					<Sidebar />
					<div className="content-wrapper">
						<Dispatcher/>
					</div>
				</div>
			);
		} else {
			window.document.body.className = "skin-black sidebar-collapse";

			return (
				<div className="wrapper">
					<div className="content-wrapper">
						<Switch>
							<Route exact path="/" component={Login}/>
							<Route component={Login}/>
						</Switch>
					</div>
				</div>
			);
		}
	}
}

export default App;
