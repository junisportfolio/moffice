import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import { Header, Sidebar } from './components';
import Dispatcher from './Dispatcher';
import {
  Login
} from './containers';
import jasync from './jasync';

class App extends Component {
  constructor() {
    super();

    let auth = {
      validate: false,
      user: null,
			user_id: '',
			user_level: '',
			user_name: '',
			user_level: 0
    };

    jasync.sync.get({
      url: "/private/v1/auth",
      success: obj => {
        if (obj.result === "ok") {
          auth.validate = true;
					auth.user = obj.user;
					auth.user_id = obj.user.id;
					auth.user_level = obj.user_level;
        }
      },
      error: () => {
        auth.validate = false;
        auth.user = null;
      }
    });
		jasync.sync.get({
			url: "/private/v1/users/" + auth.user_id,
			success: data => {
				if(data.result === "ok") {
					auth.user_name = data.users[0].user_name;
					auth.user_icon = data.users[0].user_icon;
				}
			}
		});
		this.state = {
			auth: auth
		};
    this.handleLogout = this.handleLogout.bind(this);
  }

	handleLogout() {
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
    if (this.state.auth.validate) {
      return (
				<div className="wrapper">
					<Header
						auth={this.state.auth}
						handleLogout = {this.handleLogout}
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
