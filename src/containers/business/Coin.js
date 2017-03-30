import React from 'react';
import jasync from '../../jasync';
import PageHeader from '../../components/PageHeader';
import {
	BoxTitle,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListDefault,
	ListCoin,
	TypeList,
	ListDefaultContent,
	Pagination
} from '../../components/part/';
import CoinContent from './CoinContent'
import CoinContent1 from './CoinContent1'


class Coin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "꿀관리",
			pageTitleName: "꿀",
			pageTitleNameSmall: "관리",
			board: '',
			keyword: '',
			keyword_option: 'user_name',
			search_keyword: '',
			editMode: false,

			typeList: [
				{
					id: "",
					name: "꿀 리스트"
				},
				{
					id: "use_list",
					name: "꿀 사용목록"
				},
				{
					id: "accumulate_list",
					name: "꿀 지급목록"
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

			input_coin: "",
			input_free_coin: "",
      input_company_coin: "",
      input_company_coin_take: ""
		}

		this.handleListType = this.handleListType.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.editUserData = this.editUserData.bind(this);
		this.handlePagination = this.handlePagination.bind(this);

		this.handleGive = this.handleGive.bind(this);
		this.handleTake = this.handleTake.bind(this);


	}

	handleListType(index, type) {
		this.setState({
			listType : type,
			listTypeIndex : index
		}, () => {
			this.getUserList();
		});
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
				user_level: this.state.data_user_level,
				user_gender: this.state.data_user_gender,
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
			url: "/private/v1/coin/"+this.state.listType,
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
					data_user_total_coin: data.users[0].user_total_coin,

					data1: data.users,
					data1_user_id: data.users[0].user_id,
					data1_user_nickname: data.users[0].user_nickname,
					data1_user_email: data.users[0].user_email,
					data1_user_name: data.users[0].user_name,
					data1_user_registration_date: data.users[0].user_registration_date,
					data1_user_last_login_date: data.users[0].user_last_login_date,
					data1_user_join_type: data.users[0].user_join_type,
					data1_user_status: data.users[0].user_status,
					data1_user_coin_history_idx: data.users[0].user_coin_history_idx,
					data1_user_coin_history_change: data.users[0].user_coin_history_change,
					data1_user_coin_history_type: data.users[0].user_coin_history_type,
					data1_user_coin_operation: data.users[0].user_coin_operation,
					data1_user_coin_history_result: data.users[0].user_coin_history_result,
					data1_user_coin_history_datetime: data.users[0].user_coin_history_datetime,
					data1_user_coin_history_registration_date: data.users[0].user_coin_history_registration_date,

				});
				// this.getUserData(this.state.user_info);
			}
		});
	}

	handleGive() {
		if(confirm("꿀을 지급하시겠습니까?")) {
			jasync.post({
				url: "/private/v1/coin/gift/" + this.state.data_user_id,
				data: {
					coin: +this.state.input_coin,
					free_coin: +this.state.input_free_coin,
          company_coin: +this.state.input_company_coin
				},
				success: sss => {
					this.setState({
						input_coin: '',
						input_free_coin: '',
            input_company_coin: ''
					}, () => this.getUserList());
          alert("꿀 지급을 완료하였습니다.");
				},
        error: err => {
          alert("문제가 있습니다.");
          console.log(err);
        }
			});
		}
	}

	handleTake() {
		if(confirm("꿀을 차감하시겠습니까?")) {
			jasync.post({
				url: "/private/v1/coin/refund/" + this.state.data_user_id,
				data: {
					coin: +this.state.input_coin_take,
					free_coin: +this.state.input_free_coin_take,
          company_coin: +this.state.input_company_coin_take
				},
				success: sss => {
					this.setState({
						input_coin_take: '',
						input_free_coin_take: '',
            input_company_coin_take: ''
					}, () => this.getUserList());
					alert("꿀 차감을 완료하였습니다.");
				},
				error: err => {
						alert("문제가 있습니다.");
						console.log(err);
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
		)

		const coinList = (
			<div className="row">
				{ top }

				<div className="col-md-6">
					<div className="box box-primary">
						<div className="box-body">

							<ListCoin
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
						<CoinContent

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
							input_coin={this.state.input_coin}
							input_free_coin={this.state.input_free_coin}
							input_coin_take={this.state.input_coin_take}
							input_free_coin_take={this.state.input_free_coin_take}
							input_company_coin_take={this.state.input_company_coin_take}
							handleChange={ this.handleChange }
							editMode={ this.state.editMode }
							toggleEdit={ this.toggleEdit }
							editUserData={ this.editUserData }
							handleGive={this.handleGive}
							handleTake={this.handleTake}
						/>

					</div>
				</div>
			</div>
		);

		const useList = (
			<div className="row">

				{ top }

				<div className="col-md-12">
					<div className="box box-primary">
						<div className="box-header">
							타이
						</div>


					<div className="box-body">

						<CoinContent1
							list={this.state.data1}
						/>
					</div>
					</div>

				</div>
			</div>
		);

		const giveList = (
			<div className="row">

				{ top }

				<div className="col-md-12">
					<div className="box box-primary">
						<div className="box-header">
							타이
						</div>


						<div className="box-body">

							<CoinContent1
								list={this.state.data1}
							/>
						</div>
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

				{ this.state.listTypeIndex == 0 ? coinList : this.state.listTypeIndex == 1 ? useList : this.state.listTypeIndex == 2 ? giveList : '' }

			</section>
		)
	}
}


export default Coin;



