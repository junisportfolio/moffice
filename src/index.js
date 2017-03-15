import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Miss
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App';

import '../public/css/phone.css';
import '../public/css/tablet.css';
import '../public/css/desktop.css';
import '../public/css/lgdesktop.css';

(function() {
  console.log("Call variable " + "%cprocess.env.api%c" + " and you will get String value %c" + JSON.stringify(process.env.api), "color: red", "color: black;", "color: red");
  console.log("Call variable " + "%cprocess.env.img%c" + " and you will get String value %c" + JSON.stringify(process.env.img), "color: red", "color: black;", "color: red");
})();

const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<div>
			<Route path="/" component={App} />
		</div>
	</Router>,
  document.getElementById('wrap')
);
