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
      user: null
    };

    jasync.sync.get({
      url: "/private/v1/auth",
      success: obj => {
        if (obj.result === "ok") {
          auth.validate = true;
          auth.user = obj.user;

          localStorage.setItem("user_id", obj.user.id);
        }
      },
      error: () => {
        auth.validate = false;
        auth.user = null;
      }
    });

    this.state = {
      auth: auth
    };
  }

  render() {
    if (this.state.auth.validate) {
      return (
				<div className="wrapper">
					<Header />
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
