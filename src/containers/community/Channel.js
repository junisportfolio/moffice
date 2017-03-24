import React from 'react';
import jasync from '../../jasync';
import PageHeader from '../../components/PageHeader';
import {Router, Route, Switch, Link} from 'react-router-dom';
import {
	BoxTitle,
	ChannelNav,
	TypeNav,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListDefault,
	Pagination
} from '../../components/part/';
import ChannelContent from './ChannelContent';

class Channel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "채널관리",
			pageTitleName: "채널",
			pageTitleNameSmall: "관리",

			keyword: '',
			keyword_option: 'user_name',

			community: '',
			channel_index: 0,
			channel_id: '',


			list_type: 'users',
			list_type_index: 0,
			list_type_content: [
				{id: 'users', name: 'ALL'},
				{id: 'bj', name: 'BJ'}
			],

			limit: 10,
			list_page: 1,
			list_Tcount: '',
			list_Tpage: '',
			list: '',

			data: '',
			user_info: '',

			data_community_id: '',
			data_community_users_idx: '',
			data_community_user_status: '',
			data_community_user_level: '',
			data_community_user_registration_date: '',
			data_community_user_profile_image: '',
			data_user_id: '',
			data_user_nickname: '',
			data_user_email: '',
			data_user_name: '',
			data_user_registration_date: '',
			data_user_last_login_date: '',
			data_user_join_type: '',
			data_user_status: '',


		}

		this.handleSearch = this.handleSearch.bind(this);
		this.handleChannel = this.handleChannel.bind(this);
		this.handleType = this.handleType.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handlePagination = this.handlePagination.bind(this);
	}

	handleChannel(index, id) {
		this.setState({
			channel_index: index,
			channel_id: id,
			list_type: 'users',
			list_page: 1,
		}, () => {
			this.getUserList();
		});
	}

	handleType(index, id) {
		this.setState({
			list_type_index: index,
			list_type: id,
			list_page: 1,
		}, () => {
			this.getUserList();
		});
	}

	handleSelect(user_id) {
		this.setState({
			user_info: user_id
		}, () => {
			this.getUserData(this.state.user_info);
		});
	}

	handleChange(e) {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	handleSearch(keyword, option) {
		jasync.get({
			url: "/private/v1/users",
			data: {
				page: this.state.list_page,
				limit: this.state.limit,
				'search_type[]': option,
				'search_value[]': keyword
			},
			success: data => {
				this.setState({
					list: data.users,
					total_count: data.total_count,
					user_info: data.users[0].user_id
				});

				this.getUserData(this.state.user_info);
			}
		});
	}

	handlePagination(index) {
		this.setState({
			list_page: index
		}, () => {
			this.getUserList();
		});
	}

	getChannelList() {
		jasync.get({
			url: "/private/v1/community",
			success: data => {
				this.setState({
					community: data.community,
					channel_id: data.community[0].community_id
				}, () => this.getUserList());
			}
		});
	}

	getUserList() {
		jasync.get({
			url: "/private/v1/community/" + this.state.channel_id + "/" + this.state.list_type,
			data: {
				page: this.state.list_page,
				limit: this.state.limit
			},
			success: data => {
				this.setState({
					list: data.users,

					list_Tcount: data.total_count,
					list_Tpage: data.total_page,
					list_page: +data.page,

					total_count: data.total_count,
					user_info: data.users[0].user_id
				},() => {
					this.getUserData(data.users[0].user_id);
				});
			}
		});
	}

	getUserData(user_id) {
		console.log(this.state.user_info)
		jasync.get({
			url: "/private/v1/community/" + this.state.channel_id + "/users/" + user_id,
			success: data => {
				let info = data.users;
				this.setState({

					data_community_id: info.community_id,
					data_community_users_idx: info.community_users_idx,
					data_community_user_status: info.community_user_status,
					data_community_user_level: info.community_user_level,
					data_community_user_registration_date: info.community_user_registration_date,
					data_community_user_profile_image: info.community_user_profile_image,
					data_user_id: info.user_id,
					data_user_nickname: info.user_nickname,
					data_user_email: info.user_email,
					data_user_name: info.user_name,
					data_user_registration_date: info.user_registration_date,
					data_user_last_login_date: info.user_last_login_date,
					data_user_join_type: info.user_join_type,
					data_user_status: info.user_status
				});
				console.log(this.state.data_user_name);
			}
		});
	}


	componentWillMount() {

	}

	componentDidMount() {
		this.getChannelList();
	}

	componentDidUpdate() {

	}


	render() {

		return (
			<section className="content">
				<PageHeader
					pageTitle={this.state.pageTitle}
					pageTitleName={this.state.pageTitleName}
					pageTitleNameSmall={this.state.pageTitleNameSmall}
				/>


				<div className="row">

					<div className="col-md-12">
						<div className="box box-info">

							<ChannelNav
								community={this.state.community}
								channel_index={this.state.channel_index}
								handleChannel={this.handleChannel}
							/>


						</div>
					</div>

					<div className="col-md-4">
						<div className="box box-primary">
							<div className="box-header with-border">


								<TypeNav
									content={this.state.list_type_content}
									index={this.state.list_type_index}
									events={this.handleType}
								/>

							</div>
							<div className="box-body">

								{/*
								 <div className=" col-xs-4 col-sm-3 col-lg-2 form-group">
								 <select name="keyword_option"
								 className="form-control"
								 value={this.state.keyword_option}
								 onChange={this.handleChange}>
								 <option value="user_name">이름</option>
								 <option value="user_nickname">닉네임</option>
								 <option value="user_email">이메일</option>
								 </select>
								 </div>
								 <div className="input-group input-group-sm col-xs-8 col-sm-9 col-lg-10">
								 <input
								 type="text"
								 name="keyword"
								 className="form-control"
								 value={this.state.keyword}
								 onChange={this.handleChange}
								 />
								 <InputGroupBtn>

								 <button type="button" className="btn btn-success btn-flat"
								 onClick={() => this.handleSearch(this.state.keyword, this.state.keyword_option)}>
								 검색
								 </button>

								 </InputGroupBtn>
								 </div>
								 */}


								<ListDefault
									list={this.state.list}
									handleSelect={this.handleSelect}
								/>

							</div>
							<div className="box-footer">

								<Pagination
									pagination={this.state.pagination}
									total_page={this.state.list_Tpage}
									total_count={this.state.list_Tcount}
									list_page={this.state.list_page}
									handlePagination = {this.handlePagination}
								/>

							</div>

						</div>

					</div>

					<div className="col-md-8">
						<div className="box box-success">
							<div className="box-header with-border">

								<BoxTitle
									className="box-title"
									mainTitle="홍길동"
									subTitle="님의 정보"
								/>

							</div>

							<ChannelContent
								data_community_id={this.state.data_community_id}
								data_community_users_idx={this.state.data_community_users_idx}
								data_community_user_status={this.state.data_community_user_status}
								data_community_user_level={this.state.data_community_user_level}
								data_community_user_registration_date={this.state.data_community_user_registration_date}
								data_community_user_profile_image={this.state.data_community_user_profile_image}
								data_user_id={this.state.data_user_id}
								data_user_nickname={this.state.data_user_nickname}
								data_user_email={this.state.data_user_email}
								data_user_name={this.state.data_user_name}
								data_user_registration_date={this.state.data_user_registration_date}
								data_user_last_login_date={this.state.data_user_last_login_date}
								data_user_join_type={this.state.data_user_join_type}
								data_user_status={this.state.data_user_status}
							/>

						</div>


					</div>
				</div>

			</section>
		)
	}
}


export default Channel;