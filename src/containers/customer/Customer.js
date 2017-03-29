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
	ListCustomer,
	Pagination
} from '../../components/part/';
import CustomerContent from './CustomerContent';
import CustomerContentAlliance from './CustomerContentAlliance';
import CustomerContentClaim from './CustomerContentClaim';
import CustomerContentQuestion from './CustomerContentQuestion';

class Customer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "고객센터관리",
			pageTitleName: "고객센터",
			pageTitleNameSmall: "관리",

			keyword: '',
			keyword_option: 'user_name',

			community: '',
			channel_index: 0,
			channel_id: '',


			page_type: [
				{
					id: 'question',
					name: '문의 내역'
				},
				{
					id: 'claim',
					name: '신고 내역'
				},
				{
					id: 'alliance',
					name: '제휴 내역'
				}
			],
			page_type_id: '',
			page_type_index: 0,

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
		this.handleType = this.handleType.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handlePagination = this.handlePagination.bind(this);
	}

	handleType(index, id) {
		this.setState({
			page_type_index: index,
			page_type_id: id,
			list_page: 1,
		}, () => {
			this.getUserList(this.state.page_type_id);
		});
	}

	handleSelect(user_id) {
		this.setState({
			user_info: user_id
		}, () => {
			this.getUserData(this.state.page_type_id, this.state.user_info);
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
			this.getUserList(this.state.page_type_id);
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

	getUserList(list_type) {
		jasync.get({
			url: "/private/v1/customer/" + list_type + "/list",
			data: {
				page: this.state.list_page,
				limit: this.state.limit
			},
			success: data => {

				if(list_type == 'question') {

					this.setState({
						list: data.list,

						list_Tcount: data.total_count,
						list_Tpage: data.total_page,
						list_page: +data.page,

						total_count: data.total_count,
						user_info: data.list[0].customer_question_idx,

						page_type_id: this.state.page_type[0].id,
					},() => {
						this.getUserData( list_type, data.list[0].customer_question_idx );
					});

				}else if(list_type == 'claim') {

					this.setState({
						list: data.list,

						list_Tcount: data.total_count,
						list_Tpage: data.total_page,
						list_page: +data.page,

						total_count: data.total_count,
						user_info: data.list[0].customer_claim_idx
					},() => {
						this.getUserData( list_type, data.list[0].customer_claim_idx );
					});

				}else if(list_type == 'alliance') {

					this.setState({
						list: data.list,

						list_Tcount: data.total_count,
						list_Tpage: data.total_page,
						list_page: +data.page,

						total_count: data.total_count,
						user_info: data.list[0].customer_alliance_idx
					},() => {
						this.getUserData( list_type, data.list[0].customer_alliance_idx );
					});

				}

			}
		});
	}

	getUserData(list_type, list_index) {
		jasync.get({
			url: "/private/v1/customer/" + list_type + "/" + list_index,
			success: data => {

				if(list_type === 'question') {

					let info = data.question;
					this.setState({


						data_customer_question_idx: info.customer_question_idx,
						data_user_id: info.user_id,
						data_user_name: info.user_name,
						data_user_nickname: info.user_nickname,
						data_user_phone: info.user_phone,
						data_user_email: info.user_email,
						data_customer_read_status: info.customer_read_status,
						data_customer_question_type: info.customer_question_type,
						data_customer_question_subject: info.customer_question_subject,
						data_customer_question_contents: info.customer_question_contents,
						data_customer_question_action: info.customer_question_action,
						data_customer_question_status: info.customer_question_status,
						data_customer_question_read_status: info.customer_question_read_status,
						data_customer_question_reply: info.customer_question_reply,
						data_customer_question_ip: info.customer_question_ip,
						data_customer_question_reply_date: info.customer_question_reply_date,
						data_customer_question_registration_date: info.customer_question_registration_date,

/*
						"customer_question_idx": 28,
						"user_id": "",
						"user_name": "Testuser",
						"user_nickname": null,
						"user_phone": "01000000000",
						"user_email": "wfzd@gmail.com",
						"customer_read_status": "0",
						"customer_question_type": 2,
						"customer_question_subject": "test test",
						"customer_question_contents": "test",
						"customer_question_action": "test",
						"customer_question_status": 2,
						"customer_question_read_status": 0,
						"customer_question_reply": "",
						"customer_question_ip": "59.10.126.8",
						"customer_question_reply_date": null,
						"customer_question_registration_date": "2017-03-10 15:01:32"
*/

					});

				}else if(list_type === 'claim') {

					let info = data.claim;
					this.setState({

						data_customer_claim_idx: info.customer_claim_idx,
						data_user_id: info.user_id,
						data_user_nickname: info.user_nickname,
						data_user_email: info.user_email,
						data_customer_read_status: info.customer_read_status,
						data_customer_claim_type: info.customer_claim_type,
						data_customer_claim_subject: info.customer_claim_subject,
						data_customer_claim_contents: info.customer_claim_contents,
						data_customer_claim_status: info.customer_claim_status,
						data_customer_claim_reply: info.customer_claim_reply,
						data_customer_claim_image: info.customer_claim_image,
						data_customer_claim_read_status: info.customer_claim_read_status,
						data_customer_claim_ip: info.customer_claim_ip,
						data_customer_claim_reply_date: info.customer_claim_reply_date,
						data_customer_claim_registration_date: info.customer_claim_registration_date,

/*
						"customer_claim_idx": 20,
						"user_id": "kkochan1118_23512441",
						"user_nickname": "일이삼사오육칠팔구십일이",
						"user_email": "kkochan1118@gmail.com",
						"customer_read_status": 0,
						"customer_claim_type": 2,
						"customer_claim_subject": "제목",
						"customer_claim_contents": "내용",
						"customer_claim_status": 2,
						"customer_claim_reply": "",
						"customer_claim_image": "",
						"customer_claim_read_status": 0,
						"customer_claim_ip": "59.10.126.8",
						"customer_claim_reply_date": null,
						"customer_claim_registration_date": "2017-02-14 12:12:07"
*/

					});

				}else if(list_type === 'alliance') {

					let info = data.alliance;
					this.setState({

					data_customer_alliance_idx: info.customer_alliance_idx,
					data_user_id: info.user_id,
					data_user_charge_name: info.user_charge_name,
					data_user_phone: info.user_phone,
					data_user_email: info.user_email,
					data_user_id_reply: info.user_id_reply,
					data_customer_read_status: info.customer_read_status,
					data_customer_alliance_company_name: info.customer_alliance_company_name,
					data_customer_alliance_type: info.customer_alliance_type,
					data_customer_alliance_subject: info.customer_alliance_subject,
					data_customer_alliance_contents: info.customer_alliance_contents,
					data_customer_alliance_action: info.customer_alliance_action,
					data_customer_alliance_status: info.customer_alliance_status,
					data_customer_alliance_attachfile: info.customer_alliance_attachfile,
					data_customer_alliance_reply: info.customer_alliance_reply,
					data_customer_alliance_ip: info.customer_alliance_ip,
					data_customer_alliance_reply_date: info.customer_alliance_reply_date,
					data_customer_alliance_registration_date: info.customer_alliance_registration_date,

/*
						"customer_alliance_idx": 25,
						"user_id": "kkochan1118_23512441",
						"user_charge_name": 0,
						"user_phone": "01000000000",
						"user_email": "kkochan1118@gmail.com",
						"user_id_reply": "",
						"customer_read_status": 0,
						"customer_alliance_company_name": "잇힝사무소",
						"customer_alliance_type": 2,
						"customer_alliance_subject": "제목임!!!!!!!!!!!!!",
						"customer_alliance_contents": "내용임!!!!!!!!!!!!!!!!!",
						"customer_alliance_action": "",
						"customer_alliance_status": 2,
						"customer_alliance_attachfile": "/data/image/customer/alliance_1487045381.png",
						"customer_alliance_reply": "",
						"customer_alliance_ip": "59.10.126.8",
						"customer_alliance_reply_date": null,
						"customer_alliance_registration_date": "2017-02-14 13:09:41"
*/

					});
				}
			}
		});
	}

	changeProfile() {
		let community_id = this.props.arg_community_id;
		let user_id = this.props.arg_user_id;
		let owner = this.props.owner;
		let that = this;
		let formData = new FormData();
		if(document.getElementById("user_profile_image").files[0]) {
			formData.append("profile_image", document.getElementById("user_profile_image").files[0]);
		}

		if(document.getElementById("user_profile_image").files[0]) {
			jasync.multipart.post({
				url: `/private/v1/community/${community_id}/profile_image/${user_id}`,
				data: formData,
				success: sss => {
					if(sss.result === "ok") {
						alert(sss.message);

						that.setState({edit_mode: false});
						owner.getUserData(user_id);
					}
				}
			});
		} else {
			alert("등록할 이미지가 없습니다.");
		}
	}

	grantBJ(community_id, user_id) {
		jasync.post({
			url: `/private/v1/community/${community_id}/bj`,
			data: {
				user_id: user_id
			},
			success: sss => {
				if(sss.result === "ok") {
					alert(`${community_id} 채널의 BJ로 등록되었습니다.`);
				}
			},
			error: err => {
				if(err.responseJSON.result === "err") {
					alert(err.responseJSON.message);
				}
			}
		})
	}



	componentWillMount() {

	}

	componentDidMount() {
		this.getUserList(this.state.page_type[0].id);
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
							<div className="box-header with-border">

							<TypeNav
								content={this.state.page_type}
								index={this.state.page_type_index}
								events={this.handleType}
							/>

							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="box box-primary">
							<div className="box-body">

								<ListCustomer
									current_idx={this.state.user_info}
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
					<div className="col-md-6">
						<div className="box box-success">
							<div className="box-header with-border">

								<BoxTitle
									className="box-title"
									mainTitle={this.state.data_user_name}
									subTitle="님의 정보"
								/>

							</div>

							{this.state.page_type_id == 'question' ?
								<CustomerContentQuestion
									data_customer_question_idx={this.state.data_customer_question_idx}
									data_user_id={this.state.data_user_id}
									data_user_name={this.state.data_user_name}
									data_user_nickname={this.state.data_user_nickname}
									data_user_phone={this.state.data_user_phone}
									data_user_email={this.state.data_user_email}
									data_customer_read_status={this.state.data_customer_read_status}
									data_customer_question_type={this.state.data_customer_question_type}
									data_customer_question_subject={this.state.data_customer_question_subject}
									data_customer_question_contents={this.state.data_customer_question_contents}
									data_customer_question_action={this.state.data_customer_question_action}
									data_customer_question_status={this.state.data_customer_question_status}
									data_customer_question_read_status={this.state.data_customer_question_read_status}
									data_customer_question_reply={this.state.data_customer_question_reply}
									data_customer_question_ip={this.state.data_customer_question_ip}
									data_customer_question_reply_date={this.state.data_customer_question_reply_date}
									data_customer_question_registration_date={this.state.data_customer_question_registration_date}
								/> : this.state.page_type_id == 'claim' ?
									<CustomerContentClaim
										data_customer_claim_idx={this.state.data_customer_claim_idx}
										data_user_id={this.state.data_user_id}
										data_user_nickname={this.state.data_user_nickname}
										data_user_email={this.state.data_user_email}
										data_customer_read_status={this.state.data_customer_read_status}
										data_customer_claim_type={this.state.data_customer_claim_type}
										data_customer_claim_subject={this.state.data_customer_claim_subject}
										data_customer_claim_contents={this.state.data_customer_claim_contents}
										data_customer_claim_status={this.state.data_customer_claim_status}
										data_customer_claim_reply={this.state.data_customer_claim_reply}
										data_customer_claim_image={this.state.data_customer_claim_image}
										data_customer_claim_read_status={this.state.data_customer_claim_read_status}
										data_customer_claim_ip={this.state.data_customer_claim_ip}
										data_customer_claim_reply_date={this.state.data_customer_claim_reply_date}
										data_customer_claim_registration_date={this.state.data_customer_claim_registration_date}
									/> : this.state.page_type_id === 'alliance' ?
										<CustomerContentAlliance
											data_customer_alliance_idx={this.state.data_customer_alliance_idx}
											data_user_id={this.state.data_user_id}
											data_user_charge_name={this.state.data_user_charge_name}
											data_user_phone={this.state.data_user_phone}
											data_user_email={this.state.data_user_email}
											data_user_id_reply={this.state.data_user_id_reply}
											data_customer_read_status={this.state.data_customer_read_status}
											data_customer_alliance_company_name={this.state.data_customer_alliance_company_name}
											data_customer_alliance_type={this.state.data_customer_alliance_type}
											data_customer_alliance_subject={this.state.data_customer_alliance_subject}
											data_customer_alliance_contents={this.state.data_customer_alliance_contents}
											data_customer_alliance_action={this.state.data_customer_alliance_action}
											data_customer_alliance_status={this.state.data_customer_alliance_status}
											data_customer_alliance_attachfile={this.state.data_customer_alliance_attachfile}
											data_customer_alliance_reply={this.state.data_customer_alliance_reply}
											data_customer_alliance_ip={this.state.data_customer_alliance_ip}
											data_customer_alliance_reply_date={this.state.data_customer_alliance_reply_date}
											data_customer_alliance_registration_date={this.state.data_customer_alliance_registration_date}
										/> : ''
							}
							<CustomerContent
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
								func_grant_bj={this.grantBJ}
								func_change_profile={this.changeProfile}
								owner={this}
							/>

						</div>


					</div>
				</div>

			</section>
		)
	}
}


export default Customer;