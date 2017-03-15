import React, {Component} from 'react';
import {Route, Switch, Link, Miss} from 'react-router-dom';1
import axios from 'axios';

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

	constructor(){
		super()
		this.state = {
			auth: true,
			loginUserId: null,
			loginUserLevel: null,
			__api__: "http://privateapi.yjcho-mocobee.com:30000"
		}
	}

	componentDidMount() {
		// this.AuthCheck();
		this.UserLevelCheck()

	}
	componentDidUpdate() {
		// console.log(`loginId : ${this.state.loginId}, userData : ${JSON.stringify(this.state.userData)}`);
	}

	UserLevelCheck() {
		let that = this;

		var axiosCustom = axios.create({
			baseURL: this.state.__api__,
			withCredentials: true,
		});

		axiosCustom.get('/private/v1/auth')
			.then(function (response) {
				let resultData = response.data;
				let loginId = resultData.user.id;
				let loginData = that.UserInfo(loginId);
				let loginLevel = loginData.user_level;

				console.log(`loginId : ${loginId}, loginData : ${loginData}, loginLevel : ${loginLevel}`);
			})
			.catch(function (error) {
				console.log(error);
			});


	}

	AuthCheck() {
		let that = this;
		var axiosCustom = axios.create({
			baseURL: this.state.__api__,
			withCredentials: true,
		});

		axiosCustom.get('/private/v1/auth')
			.then(function (response) {
				let resultData = response.data;
				that.setState({
					loginId: resultData.user.id
				})
				that.UserInfo(that.state.loginId);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	UserInfo(LoginId){
		let that = this;
		var axiosCustom = axios.create({
			baseURL: this.state.__api__,
			withCredentials: true,
		});

		axiosCustom.get(`/private/v1/users/${LoginId}`)
			.then(function (response) {
				let resultData = response.data;
				let data = resultData.users[0];
				console.log(data.user_level);

				that.setState({
					userData: resultData.users[0]

				})
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		let header = "";
		let sidebar = "";
		if(this.state.auth){
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
}


export default App;
