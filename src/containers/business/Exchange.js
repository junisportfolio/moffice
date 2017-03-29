import React from 'react';
import jasync from '../../jasync';
import PageHeader from '../../components/PageHeader';
import {
	BoxTitle,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListDefault,
	ListCoin,
	ListExchange,
	TypeList,
	ListDefaultContent,
	Pagination
} from '../../components/part/';
import ExchangeContent from './ExchangeContent'
import ExchangeListContent from './ExchangeListContent'


class Exchange extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "환전관리",
			pageTitleName: "환전",
			pageTitleNameSmall: "관리",
			board: '',
			keyword: '',
			keyword_option: 'user_name',
			search_keyword: '',
			editMode: false,

			typeList: [
				{
					id: "",
					name: "출금신청"
				},
				{
					id: "use_list",
					name: "코인출금"
				}
			],
			listType: '',
			listTypeIndex: 0,


			limit: 10,
			list: '',
			list_Tcount: '',
			list_Tpage: '',
			list_page: 1,

			data: '',
			user_info: '',

			input_exchange_fee: "",
      input_user_coin: "",
      input_user_exchange_status: "",
      input_user_exchange_price: ""

		}

		this.handleListType = this.handleListType.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handleSelectData2 = this.handleSelectData2.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.editUserData = this.editUserData.bind(this);
		this.handlePagination = this.handlePagination.bind(this);

	}

	handleListType(index, type) {
		this.setState({
			listType: type,
			listTypeIndex: index
		}, () => {

			if (this.state.listTypeIndex == 0) {
				this.getExchangeList()
			} else if (this.state.listTypeIndex == 1) {
				this.getUserList();
			}

		});
	}

	handleChange(e) {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	toggleEdit() {
		this.setState({
			editMode: !this.state.editMode,
      input_user_exchange_status: this.state.data2_user_exchange_status,
      input_user_exchange_price: this.state.data2_user_exchange_price
		});
	}


	handleSelect(user_id, user_nickname, user_email, user_name, user_registration_date, user_last_login_date, user_join_type, user_status, user_coin, user_free_coin, user_total_coin) {
		this.setState({
			user_info: user_id,
			data_user_id: user_id,
			data_user_nickname: user_nickname,
			data_user_email: user_email,
			data_user_name: user_name,
			data_user_registration_date: user_registration_date,
			data_user_last_login_date: user_last_login_date,
			data_user_join_type: user_join_type,
			data_user_status: user_status,
			data_user_coin: user_coin,
			data_user_free_coin: user_free_coin,
			data_user_total_coin: user_total_coin

		}, () => {
			// this.getUserData(this.state.user_info);
		});
	}

	handleSelectData2(user_exchange_idx, user_coin, user_exchange_price, user_exchange_fee, user_exchange_status, user_exchange_ip, user_exchange_confirm_date, user_exchange_registration_date, user_id, user_email, user_nickname, user_name, user_registration_date, user_join_type, user_level, user_last_login_date, user_bank_account, user_identification) {
		this.setState({
			data2_user_exchange_idx: user_exchange_idx,
			data2_user_coin: user_coin,
			data2_user_exchange_price: user_exchange_price,
			data2_user_exchange_fee: user_exchange_fee,
			data2_user_exchange_status: user_exchange_status,
			data2_user_exchange_ip: user_exchange_ip,
			data2_user_exchange_confirm_date: user_exchange_confirm_date,
			data2_user_exchange_registration_date: user_exchange_registration_date,
			data2_user_id: user_id,
			data2_user_email: user_email,
			data2_user_nickname: user_nickname,
			data2_user_name: user_name,
			data2_user_registration_date: user_registration_date,
			data2_user_join_type: user_join_type,
			data2_user_level: user_level,
			data2_user_last_login_date: user_last_login_date,
			data2_user_bank_account: user_bank_account,
			data2_user_identification: user_identification
		})
	}

	handlePagination(index) {
		this.setState({
			list_page: index
		}, () => {

			if (this.state.listTypeIndex == 0) {
				this.getExchangeList()
			} else if (this.state.listTypeIndex == 1) {
				this.getUserList();
			}

		});
	}

  confirmEdit() {
		if(confirm("수정을 완료하시겠습니까?")) {
			jasync.post({
				url: "/private/v1/exchange/modify/" + this.state.data2_user_exchange_idx,
				data: {
          user_exchange_status: this.state.input_user_exchange_status,
          user_exchange_price: this.state.input_user_exchange_price
        },
        success: sss => {
					alert(sss.message);

					this.setState({
						editMode: false
					}, () => {
						this.getExchangeList();
					});
        }
			});
		}
	}

	confirmExchange() {
		if(confirm("출금 신청을 승인하시겠습니까?")) {
			jasync.post({
				url: "/private/v1/exchange/confirm/" + this.state.data2_user_exchange_idx,
        success: sss => {
					alert(sss.message);

					this.setState({
						editMode: false
					}, () => {
						this.getExchangeList();
					});
				}
			});
		}
	}

	cancelExchange() {
		if(confirm("출금 신청을 취소하시겠습니까?")) {
			jasync.post({
				url: "/private/v1/exchange/cancel/" + this.state.data2_user_exchange_idx,
				success: sss => {
					alert(sss.message);

					this.setState({
						editMode: false
					}, () => {
						this.getExchangeList();
					});
				}
			});
		}
	}

	deleteExchange() {
		if(confirm("출금 신청을 삭제하시겠습니까?")) {
			jasync.delete({
				url: "/private/v1/exchange/" + this.state.data2_user_exchange_idx
			});
		}
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
		if (this.state.listTypeIndex == 0) {
			this.getExchangeList()
		} else if (this.state.listTypeIndex == 1) {
			this.getUserList();
		}

	}

	componentDidUpdate() {

	}


	// List viewer
	getUserList() {
		jasync.get({
			url: "/private/v1/coin/",
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
					user_info: data.users[0].user_id,

					data_user_id: data.users[0].user_id,
					data_user_nickname: data.users[0].user_nickname,
					data_user_email: data.users[0].user_email,
					data_user_name: data.users[0].user_name,
					data_user_registration_date: data.users[0].user_registration_date,
					data_user_last_login_date: data.users[0].user_last_login_date,
					data_user_join_type: data.users[0].user_join_type,
					data_user_status: data.users[0].user_status,
					data_user_coin: data.users[0].user_coin,
					data_user_free_coin: data.users[0].user_free_coin,
					data_user_total_coin: data.users[0].user_total_coin


				});
			}
		});
	}



	// List viewer
	getExchangeList() {
		jasync.get({
			url: "/private/v1/exchange/",
			data: {
				page: this.state.list_page,
				limit: this.state.limit
			},
			success: data => {
				this.setState({
					data2: data.list,

					list_Tcount: +data.total_count,
					list_Tpage: +data.total_page,
					list_page: +data.page,

					total_count: data.total_count,
					user_info: data.list[0].user_id,

					data2_user_exchange_idx: data.list[0].user_exchange_idx,
					data2_user_coin: data.list[0].user_coin,
					data2_user_exchange_price: data.list[0].user_exchange_price,
					data2_user_exchange_fee: data.list[0].user_exchange_fee,
					data2_user_exchange_status: data.list[0].user_exchange_status,
					data2_user_exchange_ip: data.list[0].user_exchange_ip,
					data2_user_exchange_confirm_date: data.list[0].user_exchange_confirm_date,
					data2_user_exchange_registration_date: data.list[0].user_exchange_registration_date,
					data2_user_id: data.list[0].user_id,
					data2_user_email: data.list[0].user_email,
					data2_user_nickname: data.list[0].user_nickname,
					data2_user_name: data.list[0].user_name,
					data2_user_registration_date: data.list[0].user_registration_date,
					data2_user_join_type: data.list[0].user_join_type,
					data2_user_level: data.list[0].user_level,
					data2_user_last_login_date: data.list[0].user_last_login_date,
					data2_user_bank_account: data.list[0].user_bank_account,
					data2_user_identification: data.list[0].user_identification,


				});
				// this.getUserData(this.state.user_info);
			}
		});
	}

  handleFee() {
		if(confirm("해당 사용자의 코인 출금 환율을 변경하시겠습니까?")) {
			jasync.post({
				url: "/private/v1/exchange/fee",
				data: {
          user_id: this.state.data_user_id,
          exchange_fee: this.state.input_exchange_fee
        },
				success: sss => {
					alert(sss.message);

					this.setState({input_exchange_fee: 0});
				}
      });
		}
	}
  handleExchange() {
		if(confirm("해당 사용자의 코인을 출금하시겠습니까?")) {
			jasync.post({
				url: "/private/v1/exchange",
				data: {
          user_id: this.state.data_user_id,
          user_coin: this.state.input_user_coin
        },
				success: sss => {
					alert(sss.message);

					this.setState({input_user_coin: 0}, () => {
						this.getUserData(this.state.data_user_id);
					});
				}
			});
		}
	}

	render() {

		const top = (
			<div className="col-md-12">
				<div className="box box-warning">
					<div className="box-header">
						<TypeList
							list={this.state.typeList}
							listTypeIndex={this.state.listTypeIndex}
							handleListType={this.handleListType}
						/>
					</div>
				</div>
			</div>
		);

		const bottom = (
			<div></div>
		);

		const exchangeList = (
			<div className="row">
				{ top }

				<div className="col-md-6">
					<div className="box box-primary">
						<div className="box-body">

							<ListCoin
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
						<ExchangeContent

							data_user_id={this.state.data_user_id}
							data_user_nickname={this.state.data_user_nickname}
							data_user_email={this.state.data_user_email}
							data_user_name={this.state.data_user_name}
							data_user_registration_date={this.state.data_user_registration_date}
							data_user_last_login_date={this.state.data_user_last_login_date}
							data_user_join_type={this.state.data_user_join_type}
							data_user_status={this.state.data_user_status}
							data_user_coin={this.state.data_user_coin}
							data_user_free_coin={this.state.data_user_free_coin}
							data_user_total_coin={this.state.data_user_total_coin}
							input_exchange_fee={this.state.input_exchange_fee}
							input_user_coin={this.state.input_user_coin}
							handleChange={ this.handleChange }
							handleFee={this.handleFee.bind(this)}
							handleExchange={this.handleExchange.bind(this)}
							editMode={ this.state.editMode }
							toggleEdit={ this.toggleEdit }
							editUserData={ this.editUserData }
						/>

					</div>
				</div>
			</div>
		);

		let button = "";

		if(this.state.editMode) {
      button = [
				<button key="confirm_btn" className="btn btn-primary" onClick={this.confirmEdit.bind(this)}>완료</button>,
				<button key="cancel_btn" className="btn btn-warning" onClick={this.toggleEdit.bind(this)}>취소</button>
      ];
		} else {
			button = [
				<button key="modify_btn" className="btn btn-primary" onClick={this.toggleEdit.bind(this)}>수정</button>,
        <button key="confirm_btn" className="btn btn-success" onClick={this.confirmExchange.bind(this)}>승인</button>,
        <button key="cancel_btn" className="btn btn-warning" onClick={this.cancelExchange.bind(this)}>취소</button>,
        <button key="delete_btn" className="btn btn-danger" onClick={this.deleteExchange.bind(this)}>삭제</button>
			];
		}

		const userExchangeList = (
			<div className="row">

				{ top }

				<div className="col-md-6">
					<div className="box box-primary">
						<div className="box-header">
							<h3 className="box-title">
								출금신청 리스트
							</h3>
						</div>


						<div className="box-body">

							<ListExchange
								list={this.state.data2}
								handleSelect={this.handleSelectData2}
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
					<div className="box box-primary">
						<div className="box-header">
							<h3 className="box-title">
								출금신청 리스트
							</h3>
							<div className="controller">
								{button}
							</div>
						</div>

						<ExchangeListContent
							data_user_exchange_idx={this.state.data2_user_exchange_idx}
							data_user_coin={this.state.data2_user_coin}
							data_user_exchange_price={this.state.data2_user_exchange_price}
							data_user_exchange_fee={this.state.data2_user_exchange_fee}
							data_user_exchange_status={this.state.data2_user_exchange_status}
							data_user_exchange_ip={this.state.data2_user_exchange_ip}
							data_user_exchange_confirm_date={this.state.data2_user_exchange_confirm_date}
							data_user_exchange_registration_date={this.state.data2_user_exchange_registration_date}
							data_user_id={this.state.data2_user_id}
							data_user_email={this.state.data2_user_email}
							data_user_nickname={this.state.data2_user_nickname}
							data_user_name={this.state.data2_user_name}
							data_user_registration_date={this.state.data2_user_registration_date}
							data_user_join_type={this.state.data2_user_join_type}
							data_user_level={this.state.data2_user_level}
							data_user_last_login_date={this.state.data2_user_last_login_date}
							data_user_bank_account={this.state.data2_user_bank_account}
							data_user_identification={this.state.data2_user_identification}
							input_user_exchange_status={this.state.input_user_exchange_status}
							input_user_exchange_price={this.state.input_user_exchange_price}
							handleChange={this.handleChange.bind(this)}
							editMode={this.state.editMode}
						/>


					</div>
				</div>
			</div>
		);


		return (
			<section className="content">
				<PageHeader
					pageTitle={this.state.pageTitle}
					pageTitleName={this.state.pageTitleName}
					pageTitleNameSmall={this.state.pageTitleNameSmall}
				/>

				{ this.state.listTypeIndex == 0 ? userExchangeList : this.state.listTypeIndex == 1 ? exchangeList : '' }

			</section>
		)
	}
}


export default Exchange;

/*

 data2_user_exchange_idx
 data2_user_coin
 data2_user_exchange_price
 data2_user_exchange_fee
 data2_user_exchange_status
 data2_user_exchange_ip
 data2_user_exchange_confirm_date
 data2_user_exchange_registration_date
 data2_user_id
 data2_user_email
 data2_user_nickname
 data2_user_name
 data2_user_registration_date
 data2_user_join_type
 data2_user_level
 data2_user_last_login_date
 data2_user_bank_account
 data2_user_identification

 */
