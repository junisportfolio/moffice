import React from 'react';
import jasync from '../../jasync';
import PageHeader from '../../components/PageHeader';
import {
	BoxTitle,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListDefault,
	ListDefaultContent,
	Pagination
} from '../../components/part/';
import MemberContent from './MemberContent'


class Member extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "회원관리",
			pageTitleName: "회원",
			pageTitleNameSmall: "관리",
			board: '',
			keyword: '',
			keyword_option: 'user_name',
			search_keyword: '',
			editMode: false,

			limit: 10,
			list: '',
			list_Tcount: '',
			list_Tpage: '',
			list_page: 1,

			data: '',
			user_info: '',

			data_user_id: '',
			data_user_email: '',
			data_user_nickname: '',
			data_user_name: '',
			data_user_gender: '',
			data_user_birth: '',
			data_user_di: '',
			data_user_registration_date: '',
			data_user_join_type: '',
			data_user_status: '',
			data_user_level: 0,
			data_user_update_date: '',
			data_user_last_login_date: '',
			data_user_withdraw_date: '',
			data_user_icon: '',
			data_user_bank_account: '',
			data_user_identification: '',
			data_user_coin: '',
			data_user_point: '',

      input_user_level: '',
      input_user_nickname: '',
      input_user_email: '',
      input_user_status: "",

		}

		this.handleSearch = this.handleSearch.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.editUserData = this.editUserData.bind(this);
		this.handlePagination = this.handlePagination.bind(this);

	}

	handleLevel(e) {
		this.setState({input_user_level: e.target.value});
	}

	handleNickname(e) {
		this.setState({input_user_nickname: e.target.value});
	}

	handleEmail(e) {
		this.setState({input_user_email: e.target.value});
	}

	handleStatus(e) {
		this.setState({input_user_status: e.target.value});
	}

	handleChange(e) {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	toggleEdit() {
		this.setState({
			editMode: !this.state.editMode,
      input_user_level: this.state.data_user_level,
      input_user_nickname: this.state.data_user_nickname,
      input_user_email: this.state.data_user_email,
      input_user_status: this.state.data_user_status
		});
	}

	handleSelect(user_id) {
		this.setState({
			user_info: user_id
		}, () => {
			this.getUserData(this.state.user_info);
		});
	}

	handlePagination(index) {
		this.setState({
			list_page: index
		}, () => {
			this.getUserList();
		});
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

	editUserData() {
		jasync.put({
			url: "/private/v1/users/" + this.state.data_user_id,
			data: {
				user_email: this.state.input_user_email,
				user_nickname: this.state.input_user_nickname,
				user_name: this.state.data_user_name,
				// user_password: this.state.data_user_password,
				user_level: this.state.input_user_level,
				user_gender: this.state.data_user_gender,
				// user_bank_account: this.state.data_user_bank_account,
				// user_identification: this.state.data_user_identification
			},
			success: data => {
				alert('변경되었습니다');
				this.setState({
					editMode: false
				}, () => {
					this.getUserData(this.state.user_info);
				});

			}
		});
	}


	componentDidMount() {
		this.getUserList(1);

	}

	componentDidUpdate() {

	}


	// List viewer
	getUserList() {
		jasync.get({
			url: "/private/v1/users",
			data: {
				page: this.state.list_page,
				limit: this.state.limit
			},
			success: data => {
				this.setState({
					list: data.users,

					list_Tcount: +data.total_count,
					list_Tpage: +data.total_page,
					list_page: +data.page,

					total_count: data.total_count,
					user_info: data.users[0].user_id
				});
				this.getUserData(this.state.user_info);
			}
		});
	}

	// Content viewer
	getUserData(user_id) {
		jasync.get({
			url: "/private/v1/users/" + user_id,
			success: data => {
				let info = data.users[0];
				this.setState({
					data_user_id: info.user_id,
					data_user_email: info.user_email,
					data_user_nickname: info.user_nickname,
					data_user_name: info.user_name,
					data_user_gender: info.user_gender,
					data_user_birth: info.user_birth,
					data_user_di: info.user_di,
					data_user_registration_date: info.user_registration_date,
					data_user_join_type: info.user_join_type,
					data_user_status: info.user_status,
					data_user_level: info.user_level,
					data_user_update_date: info.user_update_date,
					data_user_last_login_date: info.user_last_login_date,
					data_user_withdraw_date: info.user_withdraw_date,
					data_user_icon: info.user_icon,
					data_user_bank_account: info.user_bank_account,
					data_user_identification: info.user_identification,
					data_user_coin: info.user_coin,
					data_user_point: info.user_point
				});
			}
		});
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
					<div className="col-md-6">
						<div className="box box-primary">
							<div className="box-header with-border">

								<BoxTitle
									className="box-title"
									mainTitle="메인"
									subTitle="리스트"
								/>

							</div>
							<div className="box-body">

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
										<Button
											type="button"
											className="btn btn-success btn-flat"
											name="검색"
											handleSearch={() => this.handleSearch(this.state.keyword, this.state.keyword_option)}
										/>
									</InputGroupBtn>
								</div>


								<ListDefault
									list={this.state.list}
									current_idx={this.state.user_info}
									handleSelect={this.handleSelect}
								/>

							</div>
							<div className="box-footer">

								<Pagination
									limit={this.state.limit}
									total_page={this.state.list_Tpage}
									total_count={this.state.list_Tcount}
									list_page={this.state.list_page}
									handlePagination = {this.handlePagination}
								/>

							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="box box-success">
							<div className="box-header with-border">

								<BoxTitle
									className="box-title"
									mainTitle={this.state.data_user_name}
									subTitle="님의 정보"
								/>

							</div>
							<MemberContent

								data_user_id={ this.state.data_user_id}
								data_user_email={ this.state.data_user_email}
								data_user_nickname={ this.state.data_user_nickname}
								data_user_name={ this.state.data_user_name}
								data_user_gender={ this.state.data_user_gender}
								data_user_birth={ this.state.data_user_birth}
								data_user_di={ this.state.data_user_di}
								data_user_registration_date={ this.state.data_user_registration_date}
								data_user_join_type={ this.state.data_user_join_type}
								data_user_status={ this.state.data_user_status}
								data_user_level={ this.state.data_user_level}
								data_user_update_date={ this.state.data_user_update_date}
								data_user_last_login_date={ this.state.data_user_last_login_date}
								data_user_withdraw_date={ this.state.data_user_withdraw_date}
								data_user_icon={ this.state.data_user_icon}
								data_user_bank_account={ this.state.data_user_bank_account}
								data_user_identification={ this.state.data_user_identification}
								data_user_coin={ this.state.data_user_coin}
								data_user_point={ this.state.data_user_point}
								input_user_level={this.state.input_user_level}
								input_user_nickname={this.state.input_user_nickname}
								input_user_email={this.state.input_user_email}
								input_user_status={this.state.input_user_status}
								handleLevel={this.handleLevel.bind(this)}
								handleNickname={this.handleNickname.bind(this)}
								handleEmail={this.handleEmail.bind(this)}
								handleStatus={this.handleStatus.bind(this)}
								handleChange={ this.handleChange }
								editMode={ this.state.editMode }
								toggleEdit={ this.toggleEdit }
								editUserData={ this.editUserData }
							/>

						</div>
					</div>
				</div>

			</section>
		)
	}
}


export default Member;



