import React from 'react';
import jasync from '../../jasync';
import PageHeader from '../../components/PageHeader';
import {
	BoxTitle,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListDefault,
	ListProduct,
	Pagination
} from '../../components/part/';
import ProductContent from './ProductContent'


class Product extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageTitle: "상품관리",
			pageTitleName: "상품",
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

		this.handleSearch = this.handleSearch.bind(this);
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
			url: "/private/v1/promotion",
			data: {
				page: this.state.list_page,
				limit: this.state.limit,
				'search_type[]': option,
				'search_value[]': keyword
			},
			success: data => {
				this.setState({
					list: data.list,
					total_count: data.total_count,
					user_info: data.list[0].promotion_coin_idx
				});
				this.getUserData(this.state.user_info);
			}
		});


	}

	editUserData() {
		jasync.post({
			url: "/private/v1/promotion/"+this.state.data_promotion_coin_idx+"/modify",
			data: {
				promotion_coin_idx: this.state.data_promotion_coin_idx,
				promotion_coin_name: this.state.data_promotion_coin_name,
				promotion_coin_max: this.state.data_promotion_coin_max,
				promotion_coin: this.state.data_promotion_coin,
				promotion_coin_status: 1,
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
			url: "/private/v1/product",
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
					user_info: data.list[0].promotion_coin_idx
				});
				// this.getUserData(this.state.user_info);
			}
		});
	}

	// Content viewer
	getUserData(promotion_coin_idx) {
		jasync.get({
			url: "/private/v1/promotion/" + promotion_coin_idx,
			success: data => {
				let info = data.product;
				this.setState({

					data_promotion_coin_idx: info.promotion_coin_idx,
					data_promotion_name: info.promotion_name,
					data_promotion_coin_id: info.promotion_coin_id,
					data_promotion_coin_max: info.promotion_coin_max,
					data_promotion_coin: info.promotion_coin,
					data_user_id: info.user_id,
					data_promotion_coin_start_date: info.promotion_coin_start_date,
					data_promotion_coin_end_date: info.promotion_coin_end_date,
					data_promotion_coin_status: info.promotion_coin_status,
					data_promotion_coin_type: info.promotion_coin_type,
					data_promotion_coin_registration_date: info.promotion_coin_registration_date,
					data_promotion_count: info.promotion_count,
					data_promotion_status: info.promotion_status,

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

					<div className="col-md-12">

						<div className="box box-warning">

							<div className="box-header with-border">

								<h3 className="box-title type-block">
									<b>
										상품
									</b>
									리스트
									<button type="button" className="btn btn-primary flr">상품 등록</button>
								</h3>

							</div>
							<div className="box-body hidden">

								<div className="box-body border-style">
									<form className="form-horizontal">
										<div className="form-group">
											<label className="control-label col-xs-4">상품 이름:</label>
											<div className="col-xs-8">

												<input type="text" className="form-control" name="" value=""/>

											</div>
										</div>
										<div className="form-group">
											<label className="control-label col-xs-4">가격 (VAT 제외):</label>
											<div className="col-xs-8">

												<input type="number" className="form-control" name="" value=""/>

											</div>
										</div>
										<div className="form-group">
											<label className="control-label col-xs-4">지급 코인 수량:</label>
											<div className="col-xs-8">

												<input type="number" className="form-control" name="" value=""/>

											</div>
										</div>
										<div className="form-group hidden">
											<label className="control-label col-xs-4">상품 상태:</label>
											<div className="col-xs-8">

												<select className="form-control"
																name=""
																value="1"
												>
													<option value="1">1</option>
												</select>

											</div>
										</div>
										<div className="form-group">
											<label className="control-label col-xs-4">상품 이미지:</label>
											<div className="col-xs-8">

												<input type="file" className="form-control" name="" value=""/>

											</div>
										</div>

										<div className="form-group">
											<div className="col-sm-offset-4 col-xs-8">
												<button
													type="button"
													className="btn btn-warning"
													onClick={ this.props.toggleEdit }
												>취소
												</button>
												<button
													type="button"
													className="btn btn-success"
													onClick={ this.props.editUserData}
												>완료
												</button>
											</div>
										</div>

									</form>

								</div>
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<div className="box box-primary">
							<div className="box-body">

								<ListProduct
									list={this.state.list}
									handleSelect={this.handleSelect}
								/>

							</div>
							<div className="box-footer">


							</div>
						</div>
					</div>

				</div>

			</section>
		)
	}
}


export default Product;



