import React, {Component} from 'react';
import {Route, Switch, Link, Miss} from 'react-router-dom';

import {
	Home,
	Member, Channel, Board, Chatting, Filter,
	Broadcast, Broadcast_code,
	Cash, Coin, Exchange, Product, Promotion,
	Customer,
	Mypage,
	NoMatch
} from './containers';

/* home */
import {
	Header,
	Sidebar,
	PageHeader
} from './components';

import About from './containers/temp/About';


class App extends Component {
	render() {
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
							<Route path="/broadcast" component={Broadcast}/>
							<Route path="/broadcast_code" component={Broadcast_code}/>

							{/* 비즈니스 */}
							<Route path="/promotion" component={Promotion}/>
							<Route path="/coin" component={Coin}/>
							<Route path="/exchange" component={Exchange}/>
							<Route path="/product" component={Product}/>
							<Route path="/cash" component={Cash}/>

							{/* 고객지원 */}
							<Route path="/customer" component={Customer}/>

							{/* 마이페이지 */}
							<Route path="/mypage" component={Mypage}/>

							<Route component={NoMatch}/>
						</Switch>

					</section>
				</div>
			</div>
		);
	}
}


export default App;
