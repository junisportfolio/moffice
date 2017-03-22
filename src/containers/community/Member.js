import React from 'react';
import $ from 'jquery';
import PageHeader from '../../components/PageHeader';
import {
	BoxTitle,
	Button, Label,
	Input, InputGroup, InputGroupBtn,
	ListDefault,
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
			page: 1,
			limit: 10,
			list: ''
		}
	}


	componentDidMount() {
		this.getUserList();

	}
	componentDidUpdate() {

	}

	// Content viewer
	getUserList() {
		let that = this;
		let formData = {};
		formData.page = that.state.page;
		formData.limit = that.state.limit;

		$.ajax({
			method: "GET",
			url: process.env.api + "/private/v1/users",
			data: formData,
			cache: false,
			xhrFields: {
				withCredentials: true
			},
			success: function (returnData) {
				if (returnData.result == "ok") {
					that.setState({
						list: returnData.users,
						total_count: returnData.total_count,
						user_info: returnData.users[0].user_id
					});
					that.getUserData(that.state.user_info);
					// console.log(`@@@@@@@@@@@@@@${JSON.stringify(that.state.list)}`);
					// that.getListContentStyleUser(that.state.user_info);
				}
			}
		});
	}

	// Content viewer
	getUserData(user_id) {
		let that = this;
		let formData = {};
		formData.user_id = user_id;

		$.ajax({
			method: "GET",
			url: process.env.api + "/private/v1/users/" + user_id,
			data: formData,
			cache: false,
			xhrFields: {
				withCredentials: true
			},
			success: function (returnData) {
				if (returnData.result == "ok") {
					that.setState({
						data: returnData.users[0],
						user_id: returnData.users[0].user_id
					});
				}
			}
		});
	}


	render(){
		return(
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

								<InputGroup>
									<Input
										type="text"
										className=""
										placeholder="검색어를 입력하세요"
										value=""
									/>
									<InputGroupBtn>
										<Button
											type="button"
											className="btn btn-success btn-flat"
											name="검색"
										/>
									</InputGroupBtn>
								</InputGroup>

								<ListDefault
									list={this.state.list}
								/>

							</div>
							<div className="box-footer">

								<Pagination
									pagination=""
								/>

							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="box box-success">
							<div className="box-header with-border">

								<BoxTitle
									className="box-title"
									mainTitle="홍길동"
									subTitle="님의 정보"
								/>

							</div>

							<MemberContent

							/>

						</div>


					</div>
				</div>

			</section>
		)
	}
}


export default Member;



