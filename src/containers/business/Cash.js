import React from 'react';
import jasync from '../../jasync';
import PageHeader from '../../components/PageHeader';
import {
	BoxTitle,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListCash,
	TypeList,
	ListDefaultContent,
	Pagination
} from '../../components/part/';
import CashContent from './CashContent'


class Cash extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "결제관리",
			pageTitleName: "결제",
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

		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.editUserData = this.editUserData.bind(this);
		this.handlePagination = this.handlePagination.bind(this);

	}

	handleChange(e) {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	toggleEdit() {
		this.setState({
			editMode: !this.state.editMode
		});
	}

	handleSelect(payment_idx, payment_order_id, user_id, user_nickname, payment_status, payment_price, payment_charge_coin, payment_type, payment_request_ip, payment_confirm_ip, payment_registration_date, payment_confirm_date) {
		this.setState({
			data_payment_idx: payment_idx,
			data_payment_order_id: payment_order_id,
			data_user_id: user_id,
			data_user_nickname: user_nickname,
			data_payment_status: payment_status,
			data_payment_price: payment_price,
			data_payment_charge_coin: payment_charge_coin,
			data_payment_type: payment_type,
			data_payment_request_ip: payment_request_ip,
			data_payment_confirm_ip: payment_confirm_ip,
			data_payment_registration_date: payment_registration_date,
			data_payment_confirm_date: payment_confirm_date,
		}, () => {
			// this.getUserData(this.state.user_info);
		});
	}

	handlePagination(index) {
		this.setState({
			list_page: index
		}, () => {

			this.getUserList();

		});
	}


	editUserData() {
		jasync.put({
			url: "/private/v1/users/" + this.state.data_user_id,
			data: {
				user_email: this.state.data_user_email,
				user_nickname: this.state.data_user_nickname,
				user_name: this.state.data_user_name,
				// user_password: this.state.data_user_password,
				user_level: this.state.data_user_level,
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
		this.getUserList();
	}

	componentDidUpdate() {

	}


	// List viewer
	getUserList() {
		jasync.get({
			url: "/private/v1/payment",
			data: {
				page: this.state.list_page,
				limit: this.state.limit
			},
			success: data => {
				this.setState({
					list: data.list,

					list_Tcount: +data.total_count,
					list_Tpage: +data.total_page,
					list_page: +data.page,

					total_count: data.total_count,
					user_info: data.list[0].payment_idx,

					data_payment_idx: data.list[0].payment_idx,
					data_payment_order_id: data.list[0].payment_order_id,
					data_user_id: data.list[0].user_id,
					data_user_nickname: data.list[0].user_nickname,
					data_payment_status: data.list[0].payment_status,
					data_payment_price: data.list[0].payment_price,
					data_payment_charge_coin: data.list[0].payment_charge_coin,
					data_payment_type: data.list[0].payment_type,
					data_payment_request_ip: data.list[0].payment_request_ip,
					data_payment_confirm_ip: data.list[0].payment_confirm_ip,
					data_payment_registration_date: data.list[0].payment_registration_date,
					data_payment_confirm_date: data.list[0].payment_confirm_date,
					data_virtual_payment: '',
				});
				if(this.state.data_payment_type == 4) {
					this.getVirtualPay();
				}
				console.log('@@@@@@@@@@@@@@@@@')
			}
		});
	}

	// List viewer
	getVirtualPay() {
		jasync.get({
			url: "/private/v1/payment/virtual_info/"+this.state.data_payment_idx,
			data: {
				page: this.state.list_page,
				limit: this.state.limit
			},
			success: data => {
				this.setState({
					data_virtual_payment: data.payment,
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
							<div className="box-body">

								<ListCash
									list={this.state.list}
									handleSelect={this.handleSelect}
								/>

							</div>


							<div className="box-footer">
								<Pagination
									limit={this.state.limit}
									total_page={this.state.list_Tpage}
									total_count={this.state.list_Tcount}
									list_page={this.state.list_page}
									handlePagination={this.handlePagination}
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
							<CashContent

								data_payment_idx={this.state.data_payment_idx}
								data_payment_order_id={this.state.data_payment_order_id}
								data_user_id={this.state.data_user_id}
								data_user_nickname={this.state.data_user_nickname}
								data_payment_status={this.state.data_payment_status}
								data_payment_price={this.state.data_payment_price}
								data_payment_charge_coin={this.state.data_payment_charge_coin}
								data_payment_type={this.state.data_payment_type}
								data_payment_request_ip={this.state.data_payment_request_ip}
								data_payment_confirm_ip={this.state.data_payment_confirm_ip}
								data_payment_registration_date={this.state.data_payment_registration_date}
								data_virtual_payment={this.state.data_virtual_payment}
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


export default Cash;
