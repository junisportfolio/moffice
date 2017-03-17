import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App';

import '../public/css/phone.css';
import '../public/css/tablet.css';
import '../public/css/desktop.css';
import '../public/css/lgdesktop.css';
import maxios from './maxios';

(function() {
  maxios.help();
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
