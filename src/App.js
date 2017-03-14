import React, {Component} from 'react';
import {Route, Switch, Link, Miss} from 'react-router-dom';

import {
	Home,
	Member, Channel, Board, Chatting, Filter,
	Broad_tool, Broad_code,
	Cash, Coin, Exchange, Product, Promotion,
	Customer,
	NoMatch
} from './containers';

/* home */
import {
	Header,
	Sidebar,
	PageHeader
} from './components';


class App extends Component {
	render() {
    console.log("Call variable " + "%cprocess.env.api%c" + " and you will get String value %c" + JSON.stringify(process.env.api), "color: red", "color: black;", "color: red");
    console.log("Call variable " + "%cprocess.env.img%c" + " and you will get String value %c" + JSON.stringify(process.env.img), "color: red", "color: black;", "color: red");

		return (
			<div className="wrapper">
				<Header/>
				<Sidebar/>
				<div className="content-wrapper">

					<section className="content">

						<Switch>
							{/* 커뮤니티 */}
							<Route exact path="/" component={Home}/>
							<Route path="/member" component={Member}/>
							<Route path="/channel" component={Channel}/>
							<Route path="/board" component={Board}/>
							<Route path="/chatting" component={Chatting}/>
							<Route path="/filter" component={Filter}/>

							{/* 방송국 */}
							<Route path="/broad_tool" component={Broad_tool}/>
							<Route path="/broad_code" component={Broad_code}/>

							{/* 비즈니스 */}
							<Route path="/promotion" component={Promotion}/>
							<Route path="/coin" component={Coin}/>
							<Route path="/exchange" component={Exchange}/>
							<Route path="/product" component={Product}/>
							<Route path="/cash" component={Cash}/>

							{/* 고객지원 */}
							<Route path="/customer" component={Customer}/>

							<Route component={NoMatch}/>
						</Switch>

					</section>
				</div>
			</div>
		);
	}
}


export default App;
